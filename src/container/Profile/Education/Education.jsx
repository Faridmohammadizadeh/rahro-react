import React from "react";
import "./education.css";
import ProfileTitle from "../ProfileTitle/ProfileTitle";
import iconbuilding from "../../../assets/icons/buildings.svg";
import iconcircle from "../../../assets/icons/circle.svg";
import iconcalendar from "../../../assets/icons/calendar.svg";

const infos = [
  { university: "دانشگاه گیلان", degree: "لیسانس", calendar: "1397 الی 1401" },
  {
    university: " امیر کبیر",
    degree: "فوق لیسانس",
    calendar: "1401 در حال تحصیل",
  },
  {
    university: "دانشگاه آزاد پیام نور برلین",
    degree: "فوق لیسانس",
    calendar: "1401 در حال تحصیل",
  },
];

const Education = () => (
  <div>
    <ProfileTitle title="تحصیلات" />
    <div className="education__card__body">
      {infos.map((info) => {
        const list = (
          <div className="education__main">
            <ol>
              <li>
                <div className="education__card__university">
                  <img
                    className="education__card__university-icon"
                    src={iconbuilding}
                  />
                  <h2>{info.university}</h2>
                </div>
              </li>
              <li>
                <div className="education__card__degree">
                  <img
                    className="education__card__degree-icon"
                    src={iconcircle}
                  />
                  <h2>{info.degree}</h2>
                </div>
              </li>
              <li>
                <div className="education__card__calendar">
                  <img
                    className="education__card__calendar-icon"
                    src={iconcalendar}
                  />
                  <h2>{info.calendar}</h2>
                </div>
              </li>
            </ol>
            <div className="education__card__line"></div>
          </div>
        );
        return list;
      })}
    </div>
  </div>
);

export default Education;
