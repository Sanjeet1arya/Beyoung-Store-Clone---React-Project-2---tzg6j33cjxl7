
import React, { useState } from "react";
import { useAuth } from "../../Context/context";
import { Link } from "react-router-dom";
import "./NavTopBlack.css";
function NavTopBlack() {
  const { login, logout, isLoggedIn } = useAuth();
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      logout();
    }
  };
  return (
    <div className="Nav__Parent--width">
      <section className="Nav__Child--1">
        <div className="Track__section">
          <span class="material-symbols-outlined">location_on</span>
          <button className="nav__btn">Track Order</button>
        </div>
        <div className="login--signup__section">
          {isLoggedIn ? (
            <div>
              <Link to="/profile">
                <button className="nav__btn">My Account</button>
              </Link>
              {/* <span>|</span>
              <Link to="/Login">
                <button onClick={handleLoginLogout} className="nav__btn">
                  {isLoggedIn ? "Logout" : "Login"}
                </button>
              </Link> */}
            </div>
          ) : (
            <div>
              <Link to="/Login">
                <button className="nav__btn">
                  {isLoggedIn ? "Logout" : "Login"}
                </button>
              </Link>
              <span>{isLoggedIn ? "" : "|"}</span>
              <Link to="/SignUp">
                <button className="nav__btn">
                  {isLoggedIn ? "" : "SignUp"}
                </button>
              </Link>
              <Link to="/ForgotPassword">
                <button className="nav__btn ForgotPassWord">
                  ForgotPassword
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
export default NavTopBlack;
