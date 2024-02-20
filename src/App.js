import "./App.css";
import Tile from "./Tile";
import IIcon from "./images/I-icon.svg";
import wantIcon from "./images/wantIcon.svg";
import getIcon from "./images/getIcon.svg";
import makeIcon from "./images/makeIcon.svg";
import notIcon from "./images/notIcon.svg";
import moreIcon from "./images/moreIcon.svg";

function App() {
  const wordArray = [
    ["I", IIcon],
    ["want", wantIcon],
    ["get", getIcon],
    ["make", makeIcon],
    ["not", notIcon],
    ["more", moreIcon],
    ["that"],
    ["who"],
    ["mine"],
    ["go"],
    ["look"],
    ["turn"],
    ["help"],
    ["all"],
    ["here"],
    ["what"],
    ["you"],
    ["like"],
    ["open"],
    ["do"],
    ["stop"],
    ["some"],
    ["in"],
    ["where"],
    ["it"],
    ["can"],
    ["play"],
    ["put"],
    ["all done"],
    ["on"],
    ["uh oh"],
    ["hey"],
  ];

  // feeling bored? move the wordArray to a new file
  // consider using the kitten placeholder as the default setting in the Tile

  return (
    <>
      <header></header>
      <body>
        <div className="tile-container">
          {wordArray.map((word) => {
            return <Tile imageURL={word[1]} tileDescription={word[0]} />;
          })}
        </div>
      </body>
    </>
  );
}

export default App;
