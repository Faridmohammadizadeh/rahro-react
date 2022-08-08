import { React, useState } from "react";
import "./comments.css";
import ProfileTitle from "../ProfileTitle/ProfileTitle";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const commentsContent = [
  { name: "علی", rate: 3.5, comment: "بسیار مفید واقع شد" },
  {
    name: "مهناز",
    rate: 1,
    comment: "تنها کاری که کردند این بود که مرا از برنامه نویسی نا امیدکردند",
  },
  {
    name: "محمد",
    rate: 4,
    comment:
      "بخاطر تجربه ای که داشتند و مهارت خیلی زیادشان تونستم توی مسیر درست بیفتم.",
  },
  {
    name: "مهدیار",
    rate: 4.5,
    comment:
      "همیشه نگران بودم که برای این که بتونم برای بازار کار آماده شم چه کارهایی باید انجام دهم. بخاطر آقای محمدی زاده احساس میکنم همین الان هم از بقیه ی همسنام جلوترم",
  },
  {
    name: "نازنین",
    rate: 5,
    comment:
      "بشدت خوش برخورد و با حوصله بودند و به همه ی سوالام با دقت و جزئیات پاسخ دادند",
  },
  {
    name: "کیان",
    rate: 4.5,
    comment:
      "راهرو لطفا نظر منم بذار. خیلی خوشحالم که تونستم از طریق راهرو با آقای محمدی زاده آشنا شم چون باعث پیشرفت بزرگی در کارکتر حرفه ای من شدند. با تشکر از راهروی عزیز.",
  },
];

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
      <ProfileTitle title="بازخوردها" />
      <div className="comment__main">
        <BsFillArrowRightCircleFill className="rightArrow" onClick={nextSlide}/>
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
