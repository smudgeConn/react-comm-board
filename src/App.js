import "./App.css";
import Tile from "./Tile";
import iIcon from "./images/meIcon.svg";
import wantIcon from "./images/wantIcon.svg";
import getIcon from "./images/getIcon.svg";
import makeIcon from "./images/makeIcon.svg";
// import notIcon from "./images/notIcon.svg";
// import moreIcon from "./images/moreIcon.svg";
import thatIcon from "./images/thatIcon.svg";
import whoIcon from "./images/whoIcon.svg";
import myIcon from "./images/myIcon.svg";
import goIcon from "./images/goIcon.svg";
import lookIcon from "./images/lookIcon.svg";
import turnIcon from "./images/turnIcon.svg";
import helpIcon from "./images/helpIcon.svg";
import allIcon from "./images/allIcon.svg";
// import hereIcon from "./images/hereIcon.svg";
import whatIcon from "./images/whatIcon.svg";
import youIcon from "./images/youIcon.svg";
import likeIcon from "./images/likeIcon.svg";
import openIcon from "./images/openIcon.svg";
import doIcon from "./images/doingIcon.svg";
import stopIcon from "./images/stopIcon.svg";
import someIcon from "./images/fewIcon.svg";
import inIcon from "./images/inIcon.svg";
import whereIcon from "./images/whereIcon.svg";
import itIcon from "./images/thatIcon.svg";
// import canIcon from "./images/canIcon.svg";
import playIcon from "./images/playingIcon.svg";
import putIcon from "./images/putIcon.svg";
import finishedIcon from "./images/finishedIcon.svg";
// import onIcon from "./images/onIcon.svg";
// import uhohIcon from "./images/uhohIcon.svg";
// import heyIcon from "./images/heyIcon.svg";

function App() {
  const wordArray = [
    ["I", iIcon],
    ["want", wantIcon],
    ["get", getIcon],
    ["make", makeIcon],
    ["not"],
    ["more"],
    ["that", thatIcon],
    ["who", whoIcon],
    ["mine", myIcon],
    ["go", goIcon],
    ["look", lookIcon],
    ["turn", turnIcon],
    ["help", helpIcon],
    ["all", allIcon],
    ["here"],
    ["what", whatIcon],
    ["you", youIcon],
    ["like", likeIcon],
    ["open", openIcon],
    ["do", doIcon],
    ["stop", stopIcon],
    ["some", someIcon],
    ["in", inIcon],
    ["where", whereIcon],
    ["it", itIcon],
    ["can"],
    ["play", playIcon],
    ["put", putIcon],
    ["finished", finishedIcon],
    ["on"],
    ["uh oh"],
    ["hey"],
  ];

  // feeling bored? move the wordArray to a new file

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
