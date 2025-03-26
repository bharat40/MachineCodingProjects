import React from "react";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="fields-container">
        <label>Name: </label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="fields-container">
        <label>Age: </label>
        <input type="number" name="age" id="age" />
      </div>

      <div className="fields-container">
        <label>Email: </label>
        <input type="email" name="email" id="email" />
      </div>
    </div>
  );
};

export default Profile;
