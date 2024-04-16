import React from "react";
import "./MainStrip.css";


function MainStrip(){
    return(
        <section className="MainStrip--Parent__section">
            <section className="LazyStrip--Child__section">
                <img className="LazyStrip--image" src="https://www.beyoung.in/api/catalog/home-page-07-02-23/desktop/box-strip-desktop-view.jpg"/>
            </section>
        </section>
    )
}


export default MainStrip;