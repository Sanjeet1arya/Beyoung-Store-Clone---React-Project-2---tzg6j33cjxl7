
import React from "react";
import "./ProductDetailsAndReview.css";

function ProductDetailsAndReview() {
  return (
    <section className="Main__Review--Parent__Section">
      <section className="Main__Review--child__Section">
        <section className="Main__Review--Image__Section">
          <img
            className="Main__Review--Image__Section"
            src="https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/just_vibin_half_sleeve_t-shir_-for_men_base_15_6_2023_700x933.jpg"
          />
        </section>
        <section className="Main__Review--Info__Section">
          <section className="Main__Review--Info__--Child--Section">
            <h3 className="Main__Review--Info__Title">
              Just Vibin Half Sleeve T-shirt for Men
            </h3>
            <h3 className="Main__Review--Info__Price">₹ 349</h3>
            <h3 className="Main__Review--Taxes">
              Inclusive of All Taxes + Free Shipping
            </h3>
          </section>
          <section className="Main__Review--Info__--Button--Section">
            <button className="Main__Review--Info__--Button--Addtocart">Add to Cart</button>
            <button className="Main__Review--Info__--Button--BuyNow">Buy Now</button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ProductDetailsAndReview;
