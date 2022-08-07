import React from "react";
import "./profile.css";
import banner from "../../assets/banner1.jpg";
import avatar from "../../assets/avatar.jpg";
import Experince from "./experience/Experince.jsx";
import ProfileHeader from "./profile-header/ProfileHeader";
import Education from "./Education/Education";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <Experince />
      <Education />
    </div>
  );
};

export default Profile;
