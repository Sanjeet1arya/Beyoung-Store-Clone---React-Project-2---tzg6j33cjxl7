
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./JeansPage.css"
function WomenPage(){
    const [results, setResults] = useState([]); // Use state to store the results
    const projectId = "f104bi07c490";
  
    async function fetchData() {
      const dynamicApi = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"jeans"}`;
      try {
        const response = await fetch(dynamicApi, {
          headers: {
            projectId: projectId,
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setResults(data.data); // Update the state with fetched data
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []); // Ensure the useEffect runs only once
  
    return (
      <section className="SearchPage__Parent--section">
      <section className="SearchPage__Result--section">
        {results.map((result, index) => (
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

export default WomenPage;
