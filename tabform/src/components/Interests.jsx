import React from "react";

const Interests = () => {
  return (
    <div className="interests-container">
      <label>
        <input type="checkbox" name="coding" id="coding" />
        Coding
      </label>
      <label>
        <input type="checkbox" name="music" id="music" />
        Music
      </label>
      <label>
        <input type="checkbox" name="cricket" id="cricket" />
        Cricket
      </label>
    </div>
  );
};

export default Interests;
