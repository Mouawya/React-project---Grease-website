import React from "react";
import { Link } from "react-router-dom";

function MoreAboutCard({ image, alt, title, text, btnText }) {
  return (
    <div className="more-about-card">
      <img src={image} alt={alt} style={{ width: "270px" }} />
      <h2 style={{ color: "rgba(7, 38, 104, 0.863)" }}>{title}</h2>
      <p>{text}</p>

      {btnText === "Buy a ticket" ? (
        <Link to={`/basket/${title}`}>
          <button className="buy-ticket-btn">{btnText}</button>
        </Link>
      ) : (
        <Link to="/registration">
          <button className="buy-ticket-btn">{btnText}</button>
        </Link>
      )}
    </div>
  );
}

export default MoreAboutCard;
