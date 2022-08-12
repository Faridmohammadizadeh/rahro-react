import React from "react";
import "./profile.css";
import banner from "../../assets/banner1.jpg";
import avatar from "../../assets/avatar.jpg";
import Experince from "./experience/Experince.jsx";
import ProfileHeader from "./profile-header/ProfileHeader";
import Education from "./Education/Education";
import Comments from "./Comments/Comments";
import Rating from "./Rating/Rating";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <Experince />
      <Education />
      <Rating />
      <Comments />
    </div>
  );
};

export default Profile;
