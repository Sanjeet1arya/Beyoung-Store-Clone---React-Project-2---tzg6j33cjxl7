
import React from "react";
import Carousel from "react-multi-carousel";
import "./ProductSlider.css";
import "react-multi-carousel/lib/styles.css";
function ProductSlider(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Carousel__Parent--div">
      <div className="Carousel__child--div">
        <h3 className="SavingZone__text">{props.title}</h3>
        <Carousel className="Carousel" responsive={responsive} infinite={true}>
          <div className="Carousel__div">
            <a>
              <img className="Carousel__img" src={props.img1} />
            </a>
          </div>
          <div className="Carousel__div">
            <a>
              <img className="Carousel__img" src={props.img2} />
            </a>
          </div>
          <div className="Carousel__div">
            <a>
              <img className="Carousel__img" src={props.img3} />
            </a>
          </div>
          <div className="Carousel__div">
            <a>
              <img className="Carousel__img" src={props.img4} />
            </a>
          </div>
          <div className="Carousel__div">
            <a>
              <img className="Carousel__img" src={props.img5} />
            </a>
          </div>
          <div className="Carousel__div">
            <a>
              <img className="Carousel__img" src={props.img6} />
            </a>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ProductSlider;
