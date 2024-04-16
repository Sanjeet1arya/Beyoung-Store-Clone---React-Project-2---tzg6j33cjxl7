
import React from "react";
import "./LazyStrip.css";


function LazyStrip(){
    return(
        <section className="LazyStrip--Parent__section">
            <section className="LazyStrip--Child__section">
                <img className="LazyStrip--image" src="https://www.beyoung.in/api/catalog/home-page-07-02-23/Home-page-strip-desktop-view1122.png"/>
            </section>
        </section>
    )
}


export default LazyStrip;
