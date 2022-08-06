import React from "react";
import "./experince.css";
import ProfileTitle from "../ProfileTitle/ProfileTitle";
import iconCode from "../../../assets/icons/code.svg";

const ExperinceCard = () => (
  <div className="experince__card_body">
    <div className="Experince__card__content">
      <div className="Experince__card__content-icon">
        <img src={iconCode} />
      </div>
      <div className="Experince__card__content-title">
        <h1>شرکت تبلیغاتی ژاهو</h1>
        <h2>فرانت اند دولپور</h2>
      </div>
      <div className="Experince__card__content-line"></div>
      <div className="Experince__card__content-years">از1399 تا 1399</div>
    </div>
  </div>
);
const Experince = () => {
  return (
    <div>
      <ProfileTitle title="سوابق شغلی" />

      <div className="experince__grid-system">
        <ExperinceCard />
        <ExperinceCard />
        <ExperinceCard />
        <ExperinceCard />
        <ExperinceCard />
      </div>
    </div>
  );
};

export default Experince;
