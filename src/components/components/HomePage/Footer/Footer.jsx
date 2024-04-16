
import React from "react";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import PinterestIcon from "@mui/icons-material/Pinterest";
import "./Footer.css";
function Footer() {
  return (
    <section className="Footer_parent--Section">
      <section className="Footer__Details--section">
        <div className="Footer__Need-Help">
          <h3 className="Footer__Title"> NEED HELP </h3>
          <ul>
            <a>
              <li>Contact Us</li>
            </a>
            <a>
              <li>Track Order</li>
            </a>
            <a>
              <li>Returns & Refunds</li>
            </a>
            <a>
              <li>FAQ's</li>
            </a>
            <a>
              <li>Career</li>
            </a>
          </ul>
        </div>
        <div className="Footer__Company">
          <h3 className="Footer__Title"> COMPANY </h3>
          <ul>
            <a>
              <li>About Us</li>
            </a>
            <a>
              <li>Beyoung Blog</li>
            </a>
            <a>
              <li>Beyoungistan</li>
            </a>
            <a>
              <li>Collaboration</li>
            </a>
            <a>
              <li>Media</li>
            </a>
          </ul>
        </div>
        <div className="Footer__More-Info">
          <h3 className="Footer__Title"> MORE INFO </h3>
          <ul>
            <a>
              <li>Term and Condition</li>
            </a>
            <a>
              <li>Privacy Policy</li>
            </a>
            <a>
              <li>Shipping Policy</li>
            </a>
            <a>
              <li>Sitemap</li>
            </a>
          </ul>
        </div>
        <div className="Footer__Location">
          <h3 className="Footer__Title extraStyle-location">LOCATION</h3>
          <a>
            <p>support@beyoung.in</p>
          </a>
          <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
          <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
        </div>
      </section>
      {/* <section className="Footer__social--link__section"> */}
{/* 
        <h3 className="Footer__social--link__section--title">LET'S BE FRIENDS</h3>
            <div className=" Footer__social--link__section--icons">
            <a>
          <InstagramIcon style={{ color: "white", fontSize: "30px" }} />
        </a>
        <a>
          <LinkedInIcon style={{ color: "white", fontSize: "30px" }} />
        </a>
        <a>
          <FacebookIcon style={{ color: "white", fontSize: "30px" }} />
        </a>
        <a>
          <TwitterIcon style={{ color: "white", fontSize: "30px" }} />
        </a>
        <a>
          <PinterestIcon style={{ color: "white", fontSize: "30px" }} />
        </a>
        <a>
          <YouTubeIcon style={{ color: "white", fontSize: "30px" }} />
        </a>
            </div> */}
      </section>
    // </section>
  );
}

export default Footer;
