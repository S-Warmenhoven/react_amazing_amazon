import React from "react";

import { ReviewDetails } from "./ReviewDetails";

export const ReviewList = props => {
  return (
    <div
      style={{
        marginTop: "4em"
      }}
    >
      <h2 className="ui horizontal divider header">Reviews</h2>
      <ul className="ui list">
        {props.reviews.map(review => (
          <ReviewDetails
            key={review.id}
            // body={review.body}
            // rating={review.rating}
            // reviewer={review.reviewer}
            // created_at={new Date(review.created_at)}
            {...review}
            onDeleteClick={props.onReviewDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
};