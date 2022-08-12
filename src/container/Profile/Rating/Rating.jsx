import { React, useState } from "react";
import "./rating.css";
import ProfileTitle from "../ProfileTitle/ProfileTitle";
import { commentsContent } from "../data/comments";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

// define the final score of the rating
const rateCounter = () => {
  const rates = [];
  commentsContent.map((comment) => rates.push(comment.rate));
  let ratesSum = 0;
  for (let i in rates) {
    ratesSum = ratesSum + Number(rates[i]);
  }
  return (ratesSum / commentsContent.length).toFixed(2);
};

// functions that calls the star icon
const ReturnFullStar = () => {
  return <BsStarFill className="rating__stars-icon" />;
};
const ReturnHalfStar = () => {
  return <BsStarHalf className="rating__stars-icon" />;
};

// deponds on the score shows the stars
const CommentStars = () => {
  const countStars = rateCounter();
  const starRow = [];

  if (countStars % 1 >= 0.5) starRow.push(ReturnHalfStar());

  for (let i = 1; i <= countStars; i++) {
    starRow.push(ReturnFullStar());
  }
  return <>{starRow}</>;
};

// display the overall rating
const CommentsOverall = () => {
  return <h2>{rateCounter()}</h2>;
};

// display counts of the rates
const CommentsCount = () => {
  return commentsContent.length.toString();
};

const Rating = () => {
  return (
    <div className="rating">
      <ProfileTitle title="بازخوردها" />
      <div className="rating__body">
        <div className="rating__contents">
          <div className="rating__overall">
            <CommentsOverall />
          </div>
          <div className="rating__stars">
            <CommentStars />
          </div>
          <div className="rating__counts">
            <h2>
              <CommentsCount />
            </h2>
            <p> رای</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
