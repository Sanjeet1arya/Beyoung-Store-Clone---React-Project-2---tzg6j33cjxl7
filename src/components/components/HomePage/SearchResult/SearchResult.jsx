
import React from "react";
import "./SearchResult.css";
//import "animate.css";
import { useAuth } from "../../Context/context";
import { Link } from "react-router-dom";
function SearchResult() {
  const { search } = useAuth();
  return (
    <section className="SearchPage__Parent--section">
      <section className="SearchPage__Result--section">
        {search.map((result, index) => (
          <div
            className="SearchPage__Content--section animate__animated animate__bounceInUp"
            key={index}
          >
            <section className="ManPage--img__section">
            <Link to="/productreview">
              <img
                className="SearchPage--img__section"
                src={result.displayImage}
                alt={result.name}
              />
              </Link>
            </section>
            <section className="SearchPage_Result--product_info--section">
              <section className="SearchPage_Result--name">
                <Link to="/productreview">
                  <h3 className="Search__name--h3">{result.name}</h3>
                </Link>
              </section>
              <section className="SearchPage_Result--price__favourite">
                <h3 className="Search__Price--h3">
                  <span className="Search__Price"> &#8377; {result.price}</span>
                </h3>
                <span class="material-symbols-outlined favourite">
                  favorite
                </span>
              </section>
            </section>
          </div>
        ))}
      </section>
    </section>
  );
}

export default SearchResult;
