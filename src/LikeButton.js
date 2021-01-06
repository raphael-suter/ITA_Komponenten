import React from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const LikeButton = ({ checked, onChange }) => {
  return (
    <Button variant="link" onClick={() => onChange(!checked)}>
      {checked ? <HeartFill /> : <Heart />}
    </Button>
  );
};

export default LikeButton;
