import React from "react";
import "./../styles/Card.css";

function Card({ title, description, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {image && <img src={image} alt={title} className="card-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
