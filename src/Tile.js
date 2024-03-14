import React from "react";
const placeholderImage = "http://placekitten.com/200/200";

// import { useState } from "react";

const Tile = ({ imageURL, tileDescription }) => {
  let image;
  if (imageURL) {
    image = imageURL;
  } else {
    image = placeholderImage;
  }

  const [selected, setSelected] = React.useState(false);

  function handleClick() {
    setSelected(!selected);
    console.log(`${tileDescription} clicked!`);
  }

  return (
    <div className="tile" onClick={handleClick}>
      <img className="image" src={image} alt="Tile Description" />
      <div className="tileDescription"> {tileDescription}</div>
    </div>
  );
};

export default Tile;
