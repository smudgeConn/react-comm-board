import React from "react";
import { useState } from "react";
import Tile from "./Tile";

function SentenceBar() {
  const [selected, setSelected] = React.useState(false);

  return (
    <div>
      <Tile selected={selected} />
    </div>
  );
}

export default SentenceBar;
