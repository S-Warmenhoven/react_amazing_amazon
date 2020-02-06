import React from "react";

export const ProductDetails = props => {
  return (
    <div className="ui segment">
      <h2 className="ui header">{props.title}</h2>
      <p>
        {props.description} <br />
        Price: {props.price} <br />
        Seller: {props.seller.full_name}
      </p>
      <small style={{
          margin: '2em',
          backgroundColor: "grey"
      }}>
        Created at {props.created_at.toLocaleString()}
      </small>
    </div>
  );
};