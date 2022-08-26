import React from "react";
import "./education.css";
import ProfileTitle from "../ProfileTitle/ProfileTitle";
import iconbuilding from "../../../assets/icons/buildings.svg";
import iconcircle from "../../../assets/icons/circle.svg";
import iconcalendar from "../../../assets/icons/calendar.svg";
import { educationContents } from "../data/education";

const Education = () => (
  <div>
    <ProfileTitle title="تحصیلات" />
    <div className="education__card__body">
      {educationContents.map((info) => {
        const list = (
          <div className="education__main">
            <ol>
              <li>
                <div className="education__card__university">
                  <img
                    className="education__card__university-icon"
                    src={iconbuilding}
                    alt="icon"
                  />
                  <h2>{info.university}</h2>
                </div>
              </li>
              <li>
                <div className="education__card__degree">
                  <img
                    className="education__card__degree-icon"
                    src={iconcircle}
                    alt="icon"
                  />
                  <h2>{info.degree}</h2>
                </div>
              </li>
              <li>
                <div className="education__card__calendar">
                  <img
                    className="education__card__calendar-icon"
                    src={iconcalendar}
                    alt="icon"
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
