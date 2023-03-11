import React from "react";
import Insta from "../assets/img/insta.svg";
import FooterMe from "../assets/img/footer-me.png";
import Linkedin from "../assets/img/linkedin.svg";
import Discord from "../assets/img/discord.svg";
import Github from "../assets/img/github.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-rect"></div>
      <div className="footer-info">
        <div className="footer-img">
          <img src={FooterMe} alt="" />
        </div>
        <div className="footer-info-flex">
          <h2>Start a project together 🏀</h2>
          <p>
            Interested in working together? We should queue <br /> up a time to
            chat. I’ll buy the coffee.
          </p>
          <div className="footer-btn">
            <button>Let’s do this <span> ✌🏻</span></button>
          </div>
        </div>
      </div>
      <div className="footer-socials">
        <div className="name-logo-footer">dhairyamarwah.</div>
        <p>connect with me online</p>
        <div className="socials">
          <a href="https://www.instagram.com/dhairyamarwah_/">
            <img src={Insta} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/dhairyamarwah/">
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://github.com/DhairyaMarwah">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.instagram.com/dhairyamarwah_/">
            <img src={Discord} alt="" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>© All Rights Reserved | Dhairya Marwah | 2023</p>
      </div>
    </div>
  );
};

export default Footer;
