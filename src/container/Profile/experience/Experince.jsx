import React from "react";
import "./experince.css";
import ProfileTitle from "../ProfileTitle/ProfileTitle";
import { experienceContent } from "../data/experiences";
import iconCode from "../../../assets/icons/code.svg";

const ExperinceCard = (props) => (
  <div className="experince__card_body">
    <div className="Experince__card__content">
      <div className="Experince__card__content-icon">
        <img src={iconCode} alt="icon" />
      </div>
      <div className="Experince__card__content-title">
        <h1>{props.company}</h1>
        <h2>{props.title}</h2>
      </div>
      <div className="Experince__card__content-line"></div>
      <div className="Experince__card__content-years">از{props.since}</div>
    </div>
  </div>
);
const Experince = () => {
  return (
    <div>
      <ProfileTitle title="تجارب تخصصی" />

      <div className="experince__grid-system">
        {experienceContent.map((experience) => {
          return (
            <ExperinceCard
              company={experience.company}
              title={experience.title}
              since={experience.since}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experince;
