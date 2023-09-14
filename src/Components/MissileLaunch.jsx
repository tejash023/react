import { useState } from "react";

const MissileLaunch = () => {
  const [openTunnel, setOpenTunnel] = useState(false);
  const [enablePower, setEnablePower] = useState(false);
  const [startCountDown, setStartCountdown] = useState(false);
  const [launchMissile, setLaunchMissile] = useState(false);
  return (
    <div className="missile-container">
      <div className="open-tunnel">
        <button onClick={() => setOpenTunnel(true)}>OPEN TUNNEL</button>
        {openTunnel ? <p>ON</p> : <p>OFF</p>}
      </div>
      <div className="enable-power">
        <button onClick={() => setEnablePower(true)} disabled={!openTunnel}>
          ENABLE POWER
        </button>
        {enablePower ? <p>ON</p> : <p>OFF</p>}
      </div>
      <div className="start-countdown">
        <button onClick={() => setStartCountdown(true)} disabled={!enablePower}>
          START COUNTDOWN
        </button>
        {startCountDown ? <p>ON</p> : <p>OFF</p>}
      </div>
      <div className="launch-missile">
        <button
          onClick={() => setLaunchMissile(true)}
          disabled={!startCountDown}
        >
          LAUNCH MISSILE
        </button>
        {launchMissile ? <p>ON</p> : <p>OFF</p>}
      </div>

      {openTunnel && enablePower && startCountDown && launchMissile && (
        <h1>We are ready to launch</h1>
      )}
    </div>
  );
};

export default MissileLaunch;
