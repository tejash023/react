import { useState } from "react";

const MissileLaunch = () => {
  const [openTunnel, setOpenTunnel] = useState(false);
  const [enablePower, setEnablePower] = useState(false);
  const [startCountDown, setStartCountdown] = useState(false);
  const [launchMissile, setLaunchMissile] = useState(false);

  const handleOpenTunnel = () => {
    if (!openTunnel) {
      setOpenTunnel(true);
    } else {
      setOpenTunnel(false);
      setEnablePower(false);
      setStartCountdown(false);
      setLaunchMissile(false);
    }
  };

  const handleEnablePower = () => {
    if (!enablePower) {
      setEnablePower(true);
    } else {
      setEnablePower(false);
      setStartCountdown(false);
      setLaunchMissile(false);
    }
  };

  const handleStartCountdown = () => {
    if (!startCountDown) {
      setStartCountdown(true);
    } else {
      setStartCountdown(false);
      setLaunchMissile(false);
    }
  };

  const handleMissileCountdown = () => {
    if (!launchMissile) {
      setLaunchMissile(true);
    } else {
      setLaunchMissile(false);
    }
  };
  return (
    <div className="container">
      <div className="missile-container">
        <div className="open-tunnel btn">
          <button onClick={handleOpenTunnel}>OPEN TUNNEL</button>
          {openTunnel ? (
            <p className="power-on">ON</p>
          ) : (
            <p className="power-off">OFF</p>
          )}
        </div>

        <div className="enable-power btn">
          <button onClick={handleEnablePower} disabled={!openTunnel}>
            ENABLE POWER
          </button>
          {enablePower ? (
            <p className="power-on">ON</p>
          ) : (
            <p className="power-off">OFF</p>
          )}
        </div>

        <div className="start-countdown btn">
          <button onClick={handleStartCountdown} disabled={!enablePower}>
            START COUNTDOWN
          </button>
          {startCountDown ? (
            <p className="power-on">ON</p>
          ) : (
            <p className="power-off">OFF</p>
          )}
        </div>

        <div className="launch-missile btn">
          <button onClick={handleMissileCountdown} disabled={!startCountDown}>
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
          <h1>We are ready to launch 🚀🚀</h1>
        </div>
      )}
    </div>
  );
};

export default MissileLaunch;
