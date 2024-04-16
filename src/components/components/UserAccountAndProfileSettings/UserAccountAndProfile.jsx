
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/context";
import "./UserAccountAndProfile.css";
function UserAccountAndProfileSettings(){
    const { logout, isLoggedIn } = useAuth();
    const handleLoginLogout = () => {
      if (isLoggedIn) {
        localStorage.removeItem('token');
        logout();

      }
    };
    
    return(
        <section className="UserAccount__main--__parent--section">
            <section className="UserAccount__child--__parent--section">
                <section className="UserAccount__child--__left--section">
                    <div className="UserAccount__child--__left--profileimg--section">
                        <div className="UserAccount__child--__left--profileimg"></div>
                        <h1 className="UserAccount__child--__left--userName">Your Account</h1>
                    </div>
                    <div className="UserAccount__child--__left--Logout--section">
                        <h3 className="UserAccount__child--__left--profile">Profile</h3>
                        <Link to="/">
                        <button onClick={handleLoginLogout} className="UserAccount__child--__logout--button"> Logout</button>
                        </Link>
                    </div>
                </section>
                <section className="UserAccount__child__right--section">
                    <section className="UserAccount__child__right--img__section">
                        <div className="UserAccount__child--__left--profileimg2"></div>
                    </section>
                    <section className="UserAccount__child__right--form__section">
                        <section className="UserAccount__child__right--form__input--section">
                            <input className="UserAccount__Input" type="text" placeholder="Name..." />
                            <input className="UserAccount__Input" type="email" placeholder="Email..."/>
                            <input className="UserAccount__Input" type="password" placeholder="CurrentPassword..."/>
                            <input className="UserAccount__Input" type="password" placeholder="New Password..."/>
                        </section>
                    </section>
                    <section className="UserAccount__child__right--form__Button--section" >
                        <button className="UserAccount__child__right--form__Button" >Update Password</button>
                        <button className="UserAccount__child__right--form__Button">Delete Me</button>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default UserAccountAndProfileSettings;
