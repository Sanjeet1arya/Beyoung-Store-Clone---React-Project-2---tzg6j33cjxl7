
import React, { useState } from "react";
import "./MainMenu.css";
import BeyoungLogo from "./assets/BeyoungLogo.jpg";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../Context/context";

function MainMenu() {
  const {setsearch} = useAuth();
  const [searchTerm, setsearchTerm] = useState("");
  const projectId = "f104bi07c490";

  async function fetchData(searchTerm) {
    if (searchTerm.trim() === "") {
      return;
    }

    const dynamicApi = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"${searchTerm}"}`;

    try {
      const response = await fetch(dynamicApi, {
        headers: {
          projectId: projectId,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setsearch(data.data);
        setsearchTerm("");
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const handleSearch = (e) => {
    setsearchTerm(e.target.value);
  };
  return (
    <section className="Main__Menu--ParentContainer">
      <section className="Main__Menu--center">
        <section className="main__Menu">
          <div className="Logo__item--container">
            <div className="Main__Menu--logo">
              <NavLink to="/">
                <img className="Main__Menu--logoImage" src={BeyoungLogo} />
              </NavLink>
            </div>
            <div className="Main__Menu--item">
              <Link to="/ManPage">
                <button className="Main__Menu--btn">MEN</button>
              </Link>
              <Link to="/WomenPage">
                <button className="Main__Menu--btn">WOMEN</button>
              </Link>
              <Link to="/joggers">
                <button className="Main__Menu--btn">JOGGERS</button>
              </Link>
              <Link to="/jeans">
                <button className="Main__Menu--btn">JEANS</button>
              </Link>
              <Link to="/pyjamas">
                <button className="Main__Menu--btn">KURTI</button>
              </Link>
            </div>
          </div>
          <div className="Main__Menu--logoItems">
            <input
              className="search__Input"
              // type="text"
              placeholder="Search entire store here..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <Link to="/searchResult">
              <span
                className="material-symbols-outlined search"
                onClick={() => fetchData(searchTerm)}
              >
                search
              </span>
            </Link>
            <Link to="/wish">
            <span class="material-symbols-outlined favourite">favorite</span>
            </Link>
            <Link to="/cart">
            <span class="material-symbols-outlined shoppingCart">
              shopping_cart
            </span>
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
}

export default MainMenu;
