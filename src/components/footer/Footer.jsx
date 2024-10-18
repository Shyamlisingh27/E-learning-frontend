import React from "react";
import "./footer.css";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Your E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Shyamli Singh</a>
        </p>
        <div className="social-links">
          <a href="">
            <AiFillGithub />
          </a>
          <a href="">
            <AiFillLinkedin />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
