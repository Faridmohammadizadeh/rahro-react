import React from "react";
import "./profileHeader.css";
import { profileContent } from "../data/profiles.js";
import avatar from "../../../assets/avatar.jpg";
import banner from "../../../assets/header.jpg";



const userID = profileContent[0].ID;

const ProfileHeader = () => {
  return (
    <div>
      <img src="../../../assets/avatar.jpg" alt="an" />
      <div className="profile__container">
        <div className="profile__container__main">
          <div
            className="profile__container__main-banner"
            style={{ backgroundImage: `url(${banner})` }}
          ></div>
          <div className="profile__container__main-content">
            <div
              className="profile__container__main-content-avatar"
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <div className="profile__container__main-content-top">
              <div className="profile__container__main-content-top-name">
                <h2>{profileContent[userID].firstName} {profileContent[userID].lastName}</h2>
                <h3>{profileContent[userID].specialty}</h3>
              </div>
              <div className="profile__container__main-content-top-pricing">
                <button>درخواست منتورینگ</button>
                <div className="profile__container__main-content-top-pricing-content">
                  هر ساعت منتورینگ: <span>{profileContent[userID].priceEachHour}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profile__container__main-content-bottom">
            {profileContent[userID].about}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
