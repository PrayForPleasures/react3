import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../images/5.jpg";
import img2 from "../images/9.jpg";
import img3 from "../images/8.jpg";
import img4 from "../images/ph9.jpg";
import img5 from "../images/13.jpg";

const sliderImgs = [
  <img key={img1} src={img1} />,
  <img key={img2} src={img2} />,
  <img key={img3} src={img3} />,
  <img key={img4} src={img4} />,
  <img key={img5} src={img5} />,
];

const useStyles = makeStyles((theme) => ({
  slider: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: "100%",
  },
  sliderImg: {
    position: "absolute",
    width: "100%",
    transition: "1s",
    opacity: "1",
    marginLeft: "0.5px",
  },
  sliderImgPrev: {
    transition: "3s",
    opacity: "0",
  },
  sliderImgNext: {
    transition: "3s",
    opacity: "0",
  },
}));

export default function Slider() {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const res = current === sliderImgs.length - 1 ? 0 : current + 1;
        return res;
      });
    }, 3000);
    return () => clearInterval();
  }, []);

  const prevImgIndex = activeIndex ? activeIndex - 1 : sliderImgs.length - 1;
  const nextImgIndex =
    activeIndex === sliderImgs.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className={classes.slider}>
      <div
        className={classes.sliderImg + " " + classes.sliderImgPrev}
        key={prevImgIndex}
      >
        {sliderImgs[prevImgIndex]}
      </div>

      <div className={classes.sliderImg} key={activeIndex}>
        {sliderImgs[activeIndex]}
      </div>

      <div
        className={classes.sliderImg + " " + classes.sliderImgNext}
        key={nextImgIndex}
      >
        {sliderImgs[nextImgIndex]}
      </div>
    </div>
  );
}
