import React, { useState } from "react";
import ReactDOM from "react-dom";
import LikeButton from "./LikeButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "./Rating";

const App = () => {
  const [checked, setChecked] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <>
      <LikeButton checked={checked} onChange={setChecked} />
      <br />
      <Rating rating={rating} onChange={setRating} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
