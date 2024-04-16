
import React, { useEffect, useState } from "react";
import "./HomePageSlider.css";
function HomePageSlider() {
  const [slide, setSlide] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((prevSlide) => !prevSlide);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  // function handleClick() {
  //   setSlide((prevSlide) => !prevSlide);
  // }
  return (
    <section className="Home__Page--slider">
      <section className="My__Slide--section">
        <div className={slide && "My__slide"}>
          <img
            className="slide__img1 fade"
            src="https://www.beyoung.in/api/catalog/home-19-8-23/new/combo-banner-desktop-vieww1.jpg"
          />
        </div>
        <div className={!slide && "My__slide"}>
          <img
            className="slide__img2 fade"
            src="https://www.beyoung.in/api/catalog/home-19-8-23/new/Boxer-home-page-banner-desktop-view1.jpg"
          />
        </div>
      </section>
      {/* <section>
        <span
          id={slide && "dark_dot"}
          className="dot"
          onClick={handleClick}
        ></span>
        <span
          id={!slide && "dark_dot"}
          className="dot"
          onClick={handleClick}
        ></span>
      </section> */}
    </section>
  );
}

export default HomePageSlider;
