import { React, useState } from "react";
import "./comments.css";
import { commentsContent } from "../data/comments";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Comments = () => {
  const [current, setCurrent] = useState(0);
  const length = commentsContent.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const pervSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(commentsContent) || commentsContent.length <= 0) {
    return null;
  }

  return (
    <div className="comment">
      <div className="comment__main">
        <BsFillArrowRightCircleFill
          className="rightArrow"
          onClick={nextSlide}
        />
        <BsFillArrowLeftCircleFill className="leftArrow" onClick={pervSlide} />
        <div className="comment__container">
          {commentsContent.map((slide, index) => {
            return (
              <section className="comment__body">
                {index === current && (
                  <div className="comment__body__content ">
                    <div className="comment__body__header">
                      <h1 key={Math.random}>{slide.name}</h1>
                      <h1 key={Math.random}>{slide.rate}</h1>
                    </div>
                    <div className="commnet__card__line"></div>
                    <div className="comment__paragrapgh">
                      <p key={Math.random}>{slide.comment}</p>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
