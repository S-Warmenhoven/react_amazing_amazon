import React from "react";

import { TagDetails } from "./TagDetails";

export const TagList = props => {
  return (
    <ul>
      {props.tags.map(tag => (
        <TagDetails
          key={tag.id}
          name={tag.name}
        />
      ))}
    </ul>
  );
};