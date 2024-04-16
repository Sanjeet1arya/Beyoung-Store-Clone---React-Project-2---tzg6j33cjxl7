
import React, { useState,useEffect } from "react";
import "./UserRegAndLogin.css";
import { useAuth } from "../Context/context";
import { useNavigate,Link} from "react-router-dom";


function UserRegAndLogin() {
  const [closeModal, setCloseModal] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassWord] = useState("");
  const projectId = "f104bi07c490";
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const {login} = useAuth();
  const data = useAuth();
  console.log(data);

  function handleMailChange(e) {
    const mailSet = e.target.value;
    setMail(mailSet);
  }

  function handlePassWordChange(e) {
    const passwordSet = e.target.value;
    setPassWord(passwordSet);
  }

  async function handleLoginClick() {
    setErrorMessage(null);
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectID: projectId,
          },
          body: JSON.stringify({
            email: mail,
            password: password,
            appType: "ecommerce",
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        console.log("successfully login");
        login();
        navigate("/");
      } else if (response.status === 401) {
        console.log(response.status);
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  }

  return (
    <section
      className="Reg__Log--Main"
      style={{ display: closeModal ? "none" : "" }}
    >
      <section className="Reg__Log--Modal">
        <div className="Reg__Log--Modal--img__div">
          <span
            className="material-symbols-outlined reg__Close--btn"
            onClick={() => {
              setCloseModal(true);
            }}
          >
            close
          </span>
          <img
            className="Reg__Log--Modal--img"
            src="https://www.beyoung.in/images/login-image-final.jpg"
            alt="Login Image"
          />
        </div>
        <div className="Reg__Log--Modal__info--parent">
          <div className="Reg__Log--Modal__info--child">
            <h3 className="h3Text">Login</h3>
            <p className="pText">Get Exciting Offers & Track Order</p>
          </div>
          <div className="Reg__Log--Modal__info--input__button--Parent">
            <input
              className="Reg__Log--Modal__info--input"
              type="email"
              placeholder="Email..."
              value={mail}
              onChange={handleMailChange}
            />
            <input
              className="Reg__Log--Modal__info--input"
              type="password"
              placeholder="Password..."
              value={password}
              onChange={handlePassWordChange}
            />
            <button
              className="Reg__Log--Modal__info--button"
              onClick={handleLoginClick}
            >
              Login
            </button>

            <Link to="/SignUp">
              <a className="Reg__Log--Modal__info--SignUp">Signup</a>
            </Link>
          </div>
          <Link to="/ForgotPassword">
            <a className="Reg__Log--Modal__info--Continueasguest">
              Forgot Password?
            </a>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default UserRegAndLogin;
