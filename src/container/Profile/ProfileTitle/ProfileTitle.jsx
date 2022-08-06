import React from "react";
import "./profileTitle.css";

const ProfileTitle = (props) => {
  return (
    <div className="section__title">
      <h1>{props.title}</h1>
    </div>
  );
};

export default ProfileTitle;
