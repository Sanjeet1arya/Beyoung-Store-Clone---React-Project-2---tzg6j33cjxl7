
import React from "react";
import HomePageSlider from "./HomePageSlider/HomePageSlider";
import HomePageAds from "./HomePageAds/HomePageAds";
import ProductSlider from "../CommonComponents/ProductSlider/ProductSlider";
import ProductSliderNewArrival from "../CommonComponents/ProductSlider/NewArrival/NewArrival";
import CodPoster from "./CashOnDeliveryPoster/CodPoster";
import LazyStrip from "./LazyStrip/LazyStrip";
import CatagoriesForMen from "./CatagoriesForMen/categoryForMen";
import CatagoriesForWomen from "./CatagoriesForWomen/categoryForWomen";
import MainStrip from "./MainStrip/MainStrip";

function HomePage() {
  return (
    <div>
      <HomePageSlider />
      <HomePageAds />
      <ProductSlider
        title="BIG SAVING ZONE"
        img1="https://www.beyoung.in/api/catalog/home-19-8-23/combo-section0209.jpg"
        img2="https://www.beyoung.in/api/catalog/home-page-07-02-23/polo-banner-homepage99.jpg"
        img3="https://www.beyoung.in/api/catalog/home-19-7-23/Printed_t-shirt_big_saving_zone_banner.jpg"
        img4="https://www.beyoung.in/api/catalog/home-19-8-23/new-shirt.jpg"
        img5="https://www.beyoung.in/api/catalog/home-19-7-23/Pyjama-Pants-home-page-banner-big-saving-mode126.jpg"
        img6="https://www.beyoung.in/api/catalog/homepage-05-06-23/Oversized-tshirt-banner-big-SAVING-ZONE0908.jpg"
      />
      <ProductSliderNewArrival
        title="NEW ARRIVAL"
        img1="https://www.beyoung.in/api/catalog/home-page-07-02-23/desktop/Chinos-desktop-view0708.jpg"
        img2="https://www.beyoung.in/api/catalog/home-page-07-02-23/desktop/cargo-pants-desktop-view1234.jpg"
        img3="https://www.beyoung.in/api/catalog/home-page-07-02-23/desktop/Shorts-desktop-view-1234.jpg"
        img4="https://www.beyoung.in/api/catalog/home-page-07-02-23/desktop/Urban-Shirts-desktop-view0708.jpg"
        img5="https://www.beyoung.in/api/catalog/home-page-07-02-23/desktop/Joggers-desktop-view1122.jpg"
        img6="https://www.beyoung.in/api/catalog/home-page-07-02-23/desktop/Active-wear-t-shirt-desktop.jpg"
      />
      <LazyStrip />
      <CatagoriesForMen />
      <CatagoriesForWomen />
      <MainStrip />
      <CodPoster />
    </div>
  );
}

export default HomePage;
