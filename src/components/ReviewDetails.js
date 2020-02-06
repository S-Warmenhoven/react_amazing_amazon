import React from "react";
import { StarRating } from "./StarRating";

export const ReviewDetails = props => {
  return (
    <div className="ui segment list">
      <p>
        {props.body} <br />
        <StarRating max={4} rating={1} />
        Rating: {props.rating} <br />
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
