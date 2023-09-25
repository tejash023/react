import { useState, useEffect } from "react";

const ParentDay15 = () => {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("Tejash");

  return (
    <div>
      <button onClick={() => setToggle((prevState) => !prevState)}>
        Toggle Component
      </button>

      {toggle ? <ChildV1 name={name} /> : <ChildV2 />}
    </div>
  );
};

export default ParentDay15;

const ChildV1 = ({ name }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Child V1 Mounting");

    const handleMouseMove = (event) => {
      console.log({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      console.log("ChildV1 unmounting");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log("Counter: ", counter);

    return () => {
      console.log("Counter Cleanup");
    };
  }, [counter]);

  return (
    <p
      style={{
        backgroundColor: "midnightblue",
        color: "white",
        padding: 20,
        borderRadius: 10,
      }}
      onClick={() => setCounter((prevCounter) => prevCounter + 1)}
    >
      I am Child V1 Component {counter} {name}
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
