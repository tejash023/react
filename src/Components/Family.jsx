import { useState } from "react";

const Family = () => {
  const [family, setFamily] = useState({
    firstName: "",
    familyName: "",
  });

  const handleFirstName = (event) => {
    setFamily({ ...family, firstName: event.target.value });
  };
  const handleFamilyName = (event) => {
    setFamily({ ...family, familyName: event.target.value });
  };
  return (
    <div>
      <input type="text" placeholder="Enter Name" onChange={handleFirstName} />
      <input
        type="text"
        placeholder="enter Family Name"
        onChange={handleFamilyName}
      />
      {family.firstName.length > 0 && family.familyName.length > 0 && (
        <h1>
          Welcome {family.firstName} to the {family.familyName} family!!
        </h1>
      )}
    </div>
  );
};

export default Family;
