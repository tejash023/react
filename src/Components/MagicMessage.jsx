import { useState } from "react";

const MagicMessage = () => {
  const [color, setColor] = useState([]);

  const handleChangeCheckbox = (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      setColor([...color, value]);
    } else {
      setColor(color.filter((item) => item !== value));
    }
    console.log("value", value);
    console.log("color", color);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="Red"
          onChange={handleChangeCheckbox}
          checked={color.includes("Red")}
        />
        Red
      </label>

      <label>
        <input
          type="checkbox"
          value="Blue"
          onChange={handleChangeCheckbox}
          checked={color.includes("Blue")}
        />
        Blue
      </label>

      <label>
        <input
          type="checkbox"
          value="Green"
          onChange={handleChangeCheckbox}
          checked={color.includes("Green")}
        />
        Green
      </label>

      <label>
        <input
          type="checkbox"
          value="Purple"
          onChange={handleChangeCheckbox}
          checked={color.includes("Purple")}
        />
        Purple
      </label>

      {color.length > 0 && <h1>You have selected {color.join(", ")}</h1>}
    </div>
  );
};
export default MagicMessage;
