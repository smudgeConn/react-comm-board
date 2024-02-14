import React from "react";
const placeholderImage = "http://placekitten.com/200/200";

const Tile = ({ imageURL, tileDescription }) => {
  let image;
  if (imageURL) {
    image = imageURL;
  } else {
    image = placeholderImage;
  }
  return (
    <div className="tile">
      <img className="image" src={image} alt="Tile Description" />
      <div className="tileDescription"> {tileDescription}</div>
    </div>
  );
};

export default Tile;
