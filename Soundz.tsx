import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
  createContext,
  ReactNode,
  CSSProperties
} from 'react';
import { Howl } from 'howler';
import { Volume2, Waves, AudioLines, AudioWaveform, Trophy } from 'lucide-react';

export type SoundzTheme = {
  tooltipBg?: string;
  tooltipColor?: string;
  pulseColor?: string;
};

interface IconProps {
  name: 'speaker' | 'waves' | 'audioLines' | 'audioWaves' | 'trophy';
  size?: number;
  strokeWidth?: number;
}

const getIcon = (
  icon: IconProps,
  isPlaying: boolean
): ReactNode => {
  const commonProps = {
    className: isPlaying ? 'sound-indicator' : '',
    size: icon.size ?? 20,
    strokeWidth: icon.strokeWidth ?? 2.5
  };

  switch (icon.name) {
    case 'speaker':
      return <Volume2 {...commonProps} />;
    case 'waves':
      return <Waves {...commonProps} />;
    case 'audioLines':
      return <AudioLines {...commonProps} />;
    case 'audioWaves':
      return <AudioWaveform {...commonProps} />;
    case 'trophy':
      return <Trophy {...commonProps} />;
    default:
      return null;
  }
};

interface SoundzProps {
  children: ReactNode;
  providedFX?: string;
  customFX?: string | null;
  noClickSound?: boolean;
  loading?: () => React.ReactNode;
  wrap?: string | null;
  fetchCooldown?: number;
  clickCooldown?: number;
  hoverFX?: string | null;
  enableHaptics?: boolean;
  keyboardKey?: string | null;
  icon?: IconProps | null;
  showTooltip?: boolean;
  tooltipText?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  tooltipAnimation?: 'fade' | 'scale' | 'slide';
  theme?: 'auto' | 'light' | 'dark' | 'neon' | 'pastel' | 'mono';
  customTheme?: SoundzTheme | null;
  animationSpeed?: string;
  layout?: string;
  className?: string;
  style?: CSSProperties;
  apiBaseUrl?: string;
}

interface SoundzContextProps extends Partial<SoundzProps> {}

const SoundzContext = createContext<SoundzContextProps>({});

export function SoundzProvider({ children, ...defaults }: { children: ReactNode } & SoundzContextProps) {
  // 🔓 Unlocks "Browser Audio Policy" - After First User-Interaction.
  useEffect(() => {
    const primeAudio = () => {
      const silentAudio = new Audio();
      silentAudio.muted = true; // Ensure Complete Silence.
      silentAudio.play().catch(() => {}); // Catch Autoplay Block Silently.
      window.removeEventListener('click', primeAudio); // Remove Listener After 1st Click.
    };

    window.addEventListener('click', primeAudio);

    return () => window.removeEventListener('click', primeAudio);
  }, []);

  return <SoundzContext.Provider value={defaults}>{children}</SoundzContext.Provider>;
}

const soundCache = new Map<string, string>();

export function Soundz(props: SoundzProps) {
  const contextDefaults = useContext(SoundzContext);
  const {
    children,
    providedFX = 'boop',
    customFX = null,
    noClickSound = false,
    loading = null,
    wrap = null,
    fetchCooldown = 10000,
    clickCooldown = 0,
    hoverFX = null,
    enableHaptics = true,
    keyboardKey = null,
    icon = null,
    showTooltip = false,
    tooltipText = 'Now playing…',
    tooltipPosition = 'top',
    tooltipAnimation = 'fade',
    theme = 'auto',
    customTheme = null,
    animationSpeed = '1s',
    layout = 'inline-flex',
    className = '',
    style = {},
    apiBaseUrl
  } = { ...contextDefaults, ...props };

  const [soundUrl, setSoundUrl] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const lastFetched = useRef(0);
  const lastClicked = useRef(0);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  const isDark = typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const activeTheme = theme === 'auto' ? (isDark ? 'dark' : 'light') : theme;

  const themeMap = {
    light: { tooltipBg: '#333', tooltipColor: '#fff', pulseColor: '#888' },
    dark: { tooltipBg: '#000', tooltipColor: '#fff', pulseColor: '#fff' },
    neon: { tooltipBg: '#0ff', tooltipColor: '#000', pulseColor: '#0ff' },
    pastel: { tooltipBg: '#ffeef1', tooltipColor: '#222', pulseColor: '#ffaacc' },
    mono: { tooltipBg: '#666', tooltipColor: '#eee', pulseColor: '#aaa' }
  };

  const themeStyle = themeMap[activeTheme as keyof typeof themeMap] ?? themeMap.light;

  const themeStyles = customTheme // If custom given, merge/override values.
                      ?
                        { ...themeStyle, ...customTheme }
                      :
                        themeStyle;

  const tooltipTransforms = {
    top: 'translateX(-50%)',
    bottom: 'translateX(-50%)',
    left: 'translateY(-50%)',
    right: 'translateY(-50%)'
  };

  const tooltipPositions = {
    top: 'top: -1.5rem; left: 50%;',
    bottom: 'bottom: -1.5rem; left: 50%;',
    left: 'left: -1.5rem; top: 50%;',
    right: 'right: -1.5rem; top: 50%;'
  };

  const tooltipAnimations = {
    fade: 'opacity 0.3s ease-in-out',
    scale: 'transform 0.3s ease-in-out',
    slide: 'top 0.3s ease-in-out'
  };

  const wrapCSS = wrap ?? `
    .wrap,
    .wrap:before,
    .wrap:after {
      margin: 0;
      padding: 0;
    }
    .wrap {
      position: relative;
      display: ${layout};
      align-items: center;
      gap: 0.5rem;
      border: none;
      font-family: inherit;
      cursor: pointer;
      color: inherit;
      background: transparent;
    }
    .wrap.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    .sound-indicator {
      animation: pulse ${animationSpeed} ease-in-out infinite;
      color: ${themeStyles.pulseColor};
    }
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.6; }
      100% { transform: scale(1); opacity: 1; }
    }
    .tooltip {
      position: absolute;
      ${tooltipPositions[tooltipPosition] || tooltipPositions.top}
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: inherit;
      opacity: 0.9;
      white-space: nowrap;
      color: ${themeStyles.tooltipColor};
      background: ${themeStyles.tooltipBg};
      transform: ${tooltipTransforms[tooltipPosition] || 'translateX(-50%)'};
      transition: ${tooltipAnimations[tooltipAnimation] || tooltipAnimations.fade};
    }
  `;

  const soundKey = customFX ? 'custom' : providedFX;
  const fallbackFX = providedFX || 'boop';

  const playSound = useCallback((url: string) => {
    if (!url) return;

    const now = Date.now();
    const sound = new Howl({
      src: [`${url}?t=${now}`],
      autoplay: true,
      onloaderror: (id: number, err: any) => console.error('Howler load error:', err),
      onplay: () => setIsPlaying(true),
      onend: () => setIsPlaying(false),
    });

    sound.play();
    if (enableHaptics && window.navigator.vibrate) window.navigator.vibrate(50);
    if (clickCooldown > 0) {
      setIsReady(false);
      setTimeout(() => setIsReady(true), clickCooldown);
    }
  }, [clickCooldown, enableHaptics]);

  const fetchSound = async () => {
    const now = Date.now();

    if (customFX) {
      soundCache.set('custom', customFX);
      setSoundUrl(customFX);
      return;
    }

    const cached = soundCache.get(fallbackFX);
    if (cached && now - lastFetched.current < fetchCooldown) {
      setSoundUrl(cached);
      return;
    }

    try {
      const base = apiBaseUrl || 'https://soundzjs.vercel.app';

      const res = await fetch(`${base}/api/sounds?sound=${fallbackFX}`);
      const contentType = res.headers.get('content-type');

      if (!res.ok) {
        throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
      }

      if (!contentType?.includes('application/json')) {
        const text = await res.text();
        throw new Error(`Expected JSON, got: ${text.slice(0, 100)}...`);
      }

      const json = await res.json();

      if (json?.url) {
        soundCache.set(fallbackFX, json.url);
        setSoundUrl(json.url);
        lastFetched.current = now;
      }
    } catch (err) {
      console.error('Sound fetch failed:', err);
    }
  };

  useEffect(() => {
    fetchSound();
    const styleEl = document.createElement('style');
    styleEl.innerHTML = wrapCSS;
    document.head.appendChild(styleEl);
    styleRef.current = styleEl;
    return () => {
      if (styleRef.current) document.head.removeChild(styleRef.current);
    };
  }, [customFX, fallbackFX, wrapCSS]);

  const handleClick = () => {
    if (!noClickSound) { // If user opts-out of sound on click (ex: Hover Sound Only).
      const now = Date.now();
      if (!soundUrl || (clickCooldown > 0 && now - lastClicked.current < clickCooldown)) return;
      lastClicked.current = now;
      playSound(soundUrl);
    }
  };

  const handleHover = () => {
    const base = apiBaseUrl || 'https://soundzjs.vercel.app';

    if (hoverFX) {
      // Use Custom API Endpoint (user must include file extension - ex: boop.mp3).
      if (hoverFX.includes("/"))
        new Howl({
          src: [`${hoverFX}?t=${Date.now()}`],
          autoplay: true,
          onloaderror: (id: number, err: any) => console.error('Howler load error:', err),
          onplay: () => setIsPlaying(true),
          onend: () => setIsPlaying(false),
        }).play();
      else // Use Soundz API Endpoint (no file extension needed - ex: boop).
        new Howl({
          src: [`${base}/sounds/${hoverFX}.mp3?t=${Date.now()}`],
          autoplay: true,
          onloaderror: (id: number, err: any) => console.error('Howler load error:', err),
          onplay: () => setIsPlaying(true),
          onend: () => setIsPlaying(false),
        }).play();
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (
      keyboardKey && e.key.toLowerCase() === keyboardKey.toLowerCase() && isReady
    ) handleClick();
  }, [keyboardKey, isReady, handleClick]);

  useEffect(() => {
    if (!keyboardKey) return;

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyboardKey, handleKeyDown]);

  return soundUrl ? (
    <div
      className={`wrap ${!isReady ? 'disabled' : ''} ${className}`}
      onClick={handleClick}
      onMouseEnter={handleHover}
      style={style}
      tabIndex={0}
    >
      { isPlaying && showTooltip && <div className="tooltip">{tooltipText}</div> }
      { icon && getIcon(icon, isPlaying) }
      { children }
    </div>
  ) : loading ? (
    loading()
  ) : (
    <p>Loading sound…</p>
  );
}