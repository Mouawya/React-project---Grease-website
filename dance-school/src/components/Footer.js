import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="social-media">
        <li>
          <FaFacebook size={25} style={{ color: "#4267B2" }} />
        </li>
        <li>
          <FaTwitter size={25} style={{ color: "#1DA1F2" }} />
        </li>
        <li>
          <FaInstagram size={25} style={{ color: "#8a3ab9" }} />
        </li>
        <li>
          <FaYoutube size={25} style={{ color: "#FF0000" }} />
        </li>
      </ul>
      <p className="copyright"> Copyright© 2021 Grease school</p>
    </div>
  );
};

export default Footer;
