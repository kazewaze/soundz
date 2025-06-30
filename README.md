<div align="center">
  <img height="auto" width="auto" src="https://raw.githubusercontent.com/kazewaze/assets-holder/main/soundz.svg" alt="Soundz" />
  <h2 style="font-weight: 700;">Sound Effects Wrapper for React</h2>
</div>

<div align="center">

  [![GitHub stars](https://img.shields.io/github/stars/kazewaze/soundz.svg?style=social)](https://github.com/kazewaze/soundz/stargazers)
  [![GitHub issues](https://img.shields.io/github/issues/kazewaze/soundz.svg)](https://github.com/kazewaze/soundz/issues)
  [![GitHub pull requests](https://img.shields.io/github/issues-pr/kazewaze/soundz.svg)](https://github.com/kazewaze/soundz/pulls)

  [![npm version](https://img.shields.io/npm/v/soundz.svg?style=flat&color=ff0072)](https://www.npmjs.com/package/soundz)
  [![npm downloads](https://img.shields.io/npm/dm/soundz.svg?style=flat&color=ff0072)](https://www.npmjs.com/package/soundz)

  [![MIT License](https://img.shields.io/badge/License-MIT-pink.svg?color=ff0072)](https://github.com/kazewaze/soundz/blob/main/LICENSE.md)
  [![Built with Vite](https://img.shields.io/badge/Built%20with%20Vite-646CFF.svg?logo=vite&logoColor=white&style=flat&color=ff0072)](https://vitejs.dev/)

  <h3 style="font-weight: 700;">Built with <a style="color: #ff0072; text-decoration: none;" href="https://www.typescriptlang.org">TypeScript</a> & Powered by <a style="color: #ff0072; text-decoration: none;" href="https://howlerjs.com">Howler.js</a></h3>

<h3 align="center">
✅ Animated<br />✅ Lightweight<br />✅ Customizable<br />✅ Fully-Accessible<br />✅ Batteries-Included<br />✅ Developer-Friendly
</h3>

</div>

## 📖 Documentation

<a style="padding: 5px; border: 1.5px solid #e70067; border-radius: 3px; font-weight: 900; text-decoration: none; color: #ffffff; background-color: #ff0072; cursor: pointer;" href="https://soundzjs.vercel.app/docs">
  Soundz Docs →
</a>

## 🚀 Quick Usage Example

```tsx
import { Soundz, SoundzProvider } from 'soundz';

<SoundzProvider theme="pastel" tooltipPosition="bottom">
  <Soundz providedFX="pop" keyboardKey="Enter">
    🔊 Play Pop
  </Soundz>
</SoundzProvider>
```

## 🎛 Available Props

- <code style="color: #ff0072;">providedFX</code><strong>: [string] — Name of predefined sound (default: boop)</strong>
- <code style="color: #ff0072;">customFX</code><strong>: [string] — URL to MP3 file</strong>
- <code style="color: #ff0072;">hoverFX</code><strong>: [string] — Sound to play on hover (Use SoundzProvider for this feature)</strong>
- <code style="color: #ff0072;">noClickSound</code><strong>: [boolean] — Disable sound on click (ex: Hover Sound Only)</strong>
- <code style="color: #ff0072;">fetchCooldown</code><strong>: [number] — Delay before re-fetching same sound (ms)</strong>
- <code style="color: #ff0072;">clickCooldown</code><strong>: [number] — Debounce clicking sound effect (ms)</strong>
- <code style="color: #ff0072;">keyboardKey</code><strong>: [string] — Trigger sound with key press</strong>
- <code style="color: #ff0072;">enableHaptics</code><strong>: [boolean] — Vibrate on click if supported</strong>
- <code style="color: #ff0072;">showTooltip</code><strong>: [boolean] — Show text when sound plays</strong>
- <code style="color: #ff0072;">tooltipText</code><strong>: [string] — Text shown in tooltip</strong>
- <code style="color: #ff0072;">tooltipPosition</code><strong>: top | bottom | left | right</strong>
- <code style="color: #ff0072;">tooltipAnimation</code><strong>: fade | scale | slide</strong>
- <code style="color: #ff0072;">animationSpeed</code><strong>: [string] — Pulse animation speed</strong>
- <code style="color: #ff0072;">icon</code><strong>: [object] — Select animated icon (speaker, waves, audioWaves, audioLines, trophy) or omit prop for no icon</strong>
- <code style="color: #ff0072;">theme</code><strong>: auto | light | dark | neon | pastel | mono</strong>
- <code style="color: #ff0072;">customTheme</code><strong>: [object] - Declare your own theme and merge/override the defaults (ex: <code style="color: #ffbd0a;">customTheme={{tooltipBg: '#ff1493', tooltipColor: '#ffffff', pulseColor: '#ff1493'}}</code>)</strong>
- <code style="color: #ff0072;">className</code><strong>: [string] — CSS class for wrapper</strong>
- <code style="color: #ff0072;">style</code><strong>: [CSSProperties] — Inline styles for wrapper</strong>
- <code style="color: #ff0072;">layout</code><strong>: [string] — CSS layout (e.g. "inline-flex")</strong>
- <code style="color: #ff0072;">wrap</code><strong>: [string] — Custom CSS class or style block</strong>
- <code style="color: #ff0072;">loading</code><strong>: [( ) => ReactNode] — Optional loading state component</strong>
- <code style="color: #ff0072;">apiBaseUrl</code><strong>: [string] — Override the base API URL for sound fetches</strong>

## 💯 Available Icons
__{ name: (REQUIRED), size: (OPTIONAL - default=20), strokeWidth: (OPTIONAL - default=2.5) }__

<ul className={styles.list}>
  <li>Speaker → <code style="color: #ff0072;">icon={{name: "speaker", size: 20, strokeWidth: 2.5}}</code></li>
  <li>Waves → <code style="color: #ff0072;">icon={{name: "waves", size: 20, strokeWidth: 2.5}}</code></li>
  <li>AudioWaves → <code style="color: #ff0072;">icon={{name: "audioWaves", size: 20, strokeWidth: 2.5}}</code></li>
  <li>AudioLines → <code style="color: #ff0072;">icon={{name: "audioLines", size: 20, strokeWidth: 2.5}}</code></li>
  <li>Trophy → <code style="color: #ff0072;">icon={{name: "trophy", size: 20, strokeWidth: 2.5}}</code></li>
</ul>

## 🎧 Provided Sounds

<ul className={styles.list}>
  <li>Boop → <code style="color: #ff0072;">providedFX={"boop"}</code></li>
  <li>Disable → <code style="color: #ff0072;">providedFX={"disable"}</code></li>
  <li>Drums → <code style="color: #ff0072;">providedFX={"drums"}</code></li>
  <li>DunDunDun → <code style="color: #ff0072;">providedFX={"dunDunDun"}</code></li>
  <li>Enable → <code style="color: #ff0072;">providedFX={"enable"}</code></li>
  <li>Error → <code style="color: #ff0072;">providedFX={"error"}</code></li>
  <li>Firework → <code style="color: #ff0072;">providedFX={"firework"}</code></li>
  <li>Glug → <code style="color: #ff0072;">providedFX={"glug"}</code></li>
  <li>GlugA → <code style="color: #ff0072;">providedFX={"glugA"}</code></li>
  <li>GlugB → <code style="color: #ff0072;">providedFX={"glugB"}</code></li>
  <li>Guitar → <code style="color: #ff0072;">providedFX={"guitar"}</code></li>
  <li>Meow → <code style="color: #ff0072;">providedFX={"meow"}</code></li>
  <li>Plunger → <code style="color: #ff0072;">providedFX={"plunger"}</code></li>
  <li>PlungerQuick → <code style="color: #ff0072;">providedFX={"plungerQuick"}</code></li>
  <li>Pop → <code style="color: #ff0072;">providedFX={"pop"}</code></li>
  <li>PopDouble → <code style="color: #ff0072;">providedFX={"popDouble"}</code></li>
  <li>PopHigh → <code style="color: #ff0072;">providedFX={"popHigh"}</code></li>
  <li>PopLow → <code style="color: #ff0072;">providedFX={"popLow"}</code></li>
  <li>Pops → <code style="color: #ff0072;">providedFX={"pops"}</code></li>
  <li>SwitchOff → <code style="color: #ff0072;">providedFX={"switchOff"}</code></li>
  <li>SwitchOn → <code style="color: #ff0072;">providedFX={"switchOn"}</code></li>
  <li>Tap → <code style="color: #ff0072;">providedFX={"tap"}</code></li>
  <li>Tik → <code style="color: #ff0072;">providedFX={"tik"}</code></li>
  <li>Tok → <code style="color: #ff0072;">providedFX={"tok"}</code></li>
  <li>Victory → <code style="color: #ff0072;">providedFX={"victory"}</code></li>
  <li>WaterDrip → <code style="color: #ff0072;">providedFX={"waterDrip"}</code></li>
</ul>

## License

__MIT © 2025 Kaycee Ingram__

<h3 style="display: flex; align-items: center; gap: 5px;">
  Cheers,
  <img
    height="auto"
    width="200px"
    src="https://raw.githubusercontent.com/kazewaze/assets-holder/main/kaycee.svg"
    alt="Kaycee Ingram" />
</h3>