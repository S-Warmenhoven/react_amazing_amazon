import React from "react";
import { StarRating } from "./StarRating";

export const ReviewDetails = props => {
  const stars = [1,2,3,4,5]
  return (
    <div className="ui segment list">
      <p>
        {props.body} <br />
        {stars.map(star =>
        <StarRating style = {{ width: 20, color: `${ props.rating >= star ? "yellow" : "black" }`}} />)}
        <br />
        rating: {props.rating}
        <small
          style={{
            color: "red",
            fontStyle: "italic"
          }}
        >
        </small>
      </p>
      <p>Reviewed by {props.reviewer.full_name} - {props.created_at.toLocaleString()}</p>
      <button
        className="ui small  red button"
        onClick={() => props.onDeleteClick(props.id)}
      >
        Delete
      </button>
    </div>
  );
};
