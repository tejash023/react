import { useState } from "react";

const MissileLaunch = () => {
  const [openTunnel, setOpenTunnel] = useState(false);
  const [enablePower, setEnablePower] = useState(false);
  const [startCountDown, setStartCountdown] = useState(false);
  const [launchMissile, setLaunchMissile] = useState(false);
  return (
    <div className="container">
      <div className="missile-container">
        <div className="open-tunnel btn">
          <button onClick={() => setOpenTunnel(true)}>OPEN TUNNEL</button>
          {openTunnel ? (
            <p className="power-on">ON</p>
          ) : (
            <p className="power-off">OFF</p>
          )}
        </div>
        <div className="enable-power btn">
          <button onClick={() => setEnablePower(true)} disabled={!openTunnel}>
            ENABLE POWER
          </button>
          {enablePower ? (
            <p className="power-on">ON</p>
          ) : (
            <p className="power-off">OFF</p>
          )}
        </div>
        <div className="start-countdown btn">
          <button
            onClick={() => setStartCountdown(true)}
            disabled={!enablePower}
          >
            START COUNTDOWN
          </button>
          {startCountDown ? (
            <p className="power-on">ON</p>
          ) : (
            <p className="power-off">OFF</p>
          )}
        </div>
        <div className="launch-missile btn">
          <button
            onClick={() => setLaunchMissile(true)}
            disabled={!startCountDown}
          >
            LAUNCH MISSILE
          </button>
          {launchMissile ? (
            <p className="power-on">ON</p>
          ) : (
            <p className="power-off">OFF</p>
          )}
        </div>
      </div>
      {openTunnel && enablePower && startCountDown && launchMissile && (
        <div className="launch">
          <img src="https://static.vecteezy.com/system/resources/previews/012/375/446/original/rocket-launch-start-up-symbol-png.png" />
          <h1>We are ready to launch 🚀 🚀</h1>
        </div>
      )}
    </div>
  );
};

export default MissileLaunch;
