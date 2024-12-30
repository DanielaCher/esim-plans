import React from "react";
import "./../styles/Card.css";

function Card({ title, description, svgContent, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {svgContent ? (
        <div className="card-svg">{svgContent}</div>
      ) : (
        image && <img src={image} alt={title} className="card-image" />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
