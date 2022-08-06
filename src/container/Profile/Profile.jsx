import React from "react";
import "./profile.css";
import banner from "../../assets/banner1.jpg";
import avatar from "../../assets/avatar.jpg";
import Experince from "./experience/Experince.jsx";
import ProfileHeader from "./profile-header/ProfileHeader";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <Experince />
      <ProfileHeader />
      <ProfileHeader />
      <ProfileHeader />
      <ProfileHeader />
      <ProfileHeader />
    </div>
  );
};

export default Profile;
