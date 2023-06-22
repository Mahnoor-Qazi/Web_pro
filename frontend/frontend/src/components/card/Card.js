import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {
  return (
    <Link to = {`/product/${props._id}`} className="card">
      <div className="image">
        <img src={props.images[0]} className="mainImg" />
        <img src={props.images[1]} className="secondImg" />
      </div>
      <div className="description">
        <p>{props.title}</p>
        <div className="prices">
          <p className="old">${props.oldPrice}</p>
          <p className="new">${props.newPrice}</p>
        </div>
      </div>
      {props.isNew && <p className="newItem">New Season</p>}
    </Link>
  );
};

export default Card;