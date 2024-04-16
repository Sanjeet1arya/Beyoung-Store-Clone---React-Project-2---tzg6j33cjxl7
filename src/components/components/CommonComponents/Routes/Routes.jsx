
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jeans from "../../JeansPage/JeansPage";
import WomenPage from "../../WomenPage/WomenPage";
import ManPage from "../../MenPage/MenPage";
import Joggers from "../../Joggers/Joggers";
import Pyjamas from "../../Pyjamas/Pyjamas";
import SearchResult from "../../HomePage/SearchResult/SearchResult";
import UserRegAndLogin from "../../UserRegistrationAndLogin/UserRegAndLogin";
import SignUp from "../../UserRegistrationAndLogin/SignUp/SignUp";
import ForgotPassword from "../../UserRegistrationAndLogin/ForgotPassword/ForgotPassword";
import MainMain from "../MainMain/MainMain";
import Nav from "../../NavigationBar/Nav";
import Footer from "../../HomePage/Footer/Footer"
import ProductDetailsAndReview from "../../ProductDetailsAndReview/ProductDetailsAndReview";
import UserAccountAndProfileSettings from "../../UserAccountAndProfileSettings/UserAccountAndProfile";
import Wish from "../../../WishListFunctionality/Wish";
import Kart from "../../Kart/Kart";
import { useEffect } from "react";
import { useAuth } from "../../Context/context";


const Router = () => {
  const { login,logout} = useAuth();
  useEffect(() => {
    // Check local storage for the token on page load
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      // If a token exists, the user is logged in
      login();
    }else{
      logout();
    }
  }, []);
  
  return (
    <BrowserRouter>
      <Nav />
      <routes>
            <Route path="/" element={<MainMain />} />
         <Route path="/jeans" element={<Jeans />} />
        <Route path="/WomenPage" element={<WomenPage />} />
        <Route path="/ManPage" element={<ManPage />} />
        <Route path="/joggers" element={<Joggers />} />
         <Route path="/pyjamas" element={<Pyjamas />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path="/Login" element={<UserRegAndLogin />} />    
            <Route path="/SignUp" element={<SignUp />} />
         <Route path="/ForgotPassword" element={<ForgotPassword />} />
         <Route path="/productreview" element={<ProductDetailsAndReview/>}/>
         <Route path="/profile" element={<UserAccountAndProfileSettings/>}/>
         <Route path="/wish" element={<Wish/>}/>
        <Route path="/cart" element={<Kart/>}/> 
         </routes>
       <Footer/>
     </BrowserRouter>
  );
};

export default Router;

// // searchResults={searchResults}
