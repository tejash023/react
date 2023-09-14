import { useState } from "react";

const Decrement = () => {
  const [element, setElement] = useState(10);

  const handleIncrement = () => {
    setElement((prevState) => {
      if (prevState >= 100) {
        return 100;
      }
      return prevState + 2;
    });
  };

  const handleDecrement = () => {
    setElement((prevState) => {
      if (prevState <= 0) {
        return 0;
      }
      return prevState - 2;
    });
  };
  return (
    <div>
      <h1>{element}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Decrement;
