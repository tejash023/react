import { useState } from "react";

const ToggleImage = () => {
  const [filter, setFilter] = useState(true);

  return (
    <div>
      <img
        src="https://cdn.britannica.com/70/234170-050-9A32B5FC/Tesla-Model-Y-white.jpg"
        alt="image"
        style={{ width: 500, filter: `grayscale(${filter ? 0 : 100}%)` }}
      />
      <button onClick={() => setFilter(!filter)}>Toggle Image </button>
    </div>
  );
};
export default ToggleImage;
