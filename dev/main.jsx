/*
  Local Development & Testing
*/

import ReactDOM from 'react-dom/client';
// *** Uncomment the line below for local development & testing ***
// import { Soundz, SoundzProvider } from '../Soundz';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container">

    {/* // *** Uncomment for testing this use case ***
    <Soundz providedFX="firework">
      <button onClick={() => console.log('Clicked!')}>Play Firework</button>
    </Soundz>
    */}

    {/*
    // *** Uncomment for testing this use case ***
    <SoundzProvider>
      <Soundz providedFX="firework" icon={{ name: "speaker", size: 20, strokeWidth: 2.5 }}>
        Click Me
      </Soundz>
    </SoundzProvider>
    */}

    {/*
    // *** Uncomment for testing this use case ***
    <SoundzProvider theme="pastel" tooltipPosition="top" showTooltip>
      <Soundz providedFX="pop">
        🔊 Play Pop
      </Soundz>
    </SoundzProvider>
    */}

    {/*
    // *** Uncomment for testing this use case ***
    <SoundzProvider providedFX="pop" hoverFX="boop">
      <Soundz>
        🔊 Click: Pop - Hover: Boop
      </Soundz>
    </SoundzProvider>
    */}

    {/*
    // *** Uncomment for testing this use case ***
    <Soundz keyboardKey="Enter">
      🔊 Play Boop on Keydown [Enter]
    </Soundz>
    */}

    {/*
    // *** Uncomment for testing this use case ***
    <SoundzProvider noClickSound={true} hoverFX="pop">
      <Soundz>
        🔊 Play Pop on Hover (Click Sound Disabled)
      </Soundz>
    </SoundzProvider>
    */}

    {/*
    // *** Uncomment for testing this use case ***
    <SoundzProvider customTheme={{ tooltipBg: '#ff1493', tooltipColor: '#ffffff', pulseColor: '#ff1493' }}>
      <Soundz
        providedFX="firework"
        icon={{ name: "speaker", size: 20, strokeWidth: 2.5 }}
        showTooltip
        tooltipText="POW!"
        tooltipPosition="top"
      >Click Me</Soundz>
    </SoundzProvider>
    */}
  </div>
);