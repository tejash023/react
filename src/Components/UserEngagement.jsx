import { useState, useEffect } from "react";

const UserEngagement = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle((prevState) => !prevState)}>
        Toggle Component
      </button>

      {toggle ? <ChildV1 /> : <ChildV2 />}
    </div>
  );
};

const ChildV1 = () => {
  useEffect(() => {
    const currTime = new Date();
    console.log(
      "currentTime in ChildV1: ",
      currTime.toTimeString().slice(0, 8)
    );

    return () => {
      const exitTime = new Date();
      console.log("exitTime in ChildV1", exitTime.toTimeString().slice(0, 8));

      let engagementTime = exitTime - currTime;

      console.log(
        "Total time on ChildV1: ",
        Math.round(engagementTime / 1000) + " seconds"
      );
    };
  }, []);

  return (
    <p
      style={{
        backgroundColor: "midnightblue",
        color: "white",
        padding: 20,
        borderRadius: 10,
      }}
    >
      I am Child V1 Component
    </p>
  );
};

const ChildV2 = () => {
  useEffect(() => {
    console.log("Child V2 Mounting");

    return () => {
      console.log("ChildV2 unmounting");
    };
  }, []);

  return (
    <p
      style={{
        backgroundColor: "orangered",
        color: "white",
        padding: 20,
        borderRadius: 10,
      }}
    >
      I am Child V2 Component
    </p>
  );
};

export default UserEngagement;
