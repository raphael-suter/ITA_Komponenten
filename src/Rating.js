import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const Rating = ({ rating, onChange }) => {
  let stars = [];

  for (let count = 1; count <= 5; count++) {
    const star = (
      <Button
        variant="link"
        onClick={() => onChange(count === rating ? 0 : count)}
      >
        {count <= rating ? <StarFill /> : <Star />}
      </Button>
    );

    stars.push(star);
  }

  return stars;
};

export default Rating;
