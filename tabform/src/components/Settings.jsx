import React from "react";

const Settings = () => {
  return (
    <div>
      <label>
        <input type="radio" name="dark" id="dark" />
        Dark
      </label>
      <label>
        <input type="radio" name="light" id="light" />
        Light
      </label>
    </div>
  );
};

export default Settings;
