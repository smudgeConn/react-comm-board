// NEXT: Update Python code to comment out the image text in the SVG files and update the images

import "./App.css";
import Tile from "./Tile";
import SentenceBar from "./SentenceBar";
import iIcon from "./images/meIcon.svg";
import wantIcon from "./images/wantIcon.svg";
import getIcon from "./images/getIcon.svg";
import makeIcon from "./images/makeIcon.svg";
import notIcon from "./images/notIcon.svg";
import moreIcon from "./images/moreIcon.svg";
import thatIcon from "./images/thatIcon.svg";
import whoIcon from "./images/whoIcon.svg";
import mineIcon from "./images/mineIcon.svg";
import goIcon from "./images/goIcon.svg";
import lookIcon from "./images/lookIcon.svg";
import turnIcon from "./images/turnIcon.svg";
import helpIcon from "./images/helpIcon.svg";
import allIcon from "./images/allIcon.svg";
import hereIcon from "./images/hereIcon.svg";
import whatIcon from "./images/whatIcon.svg";
import youIcon from "./images/youIcon.svg";
import likeIcon from "./images/likeIcon.svg";
import openIcon from "./images/openIcon.svg";
import doIcon from "./images/doIcon.svg";
import stopIcon from "./images/stopIcon.svg";
import someIcon from "./images/someIcon.svg";
import inIcon from "./images/inIcon.svg";
import whereIcon from "./images/whereIcon.svg";
import itIcon from "./images/itIcon.svg";
import canIcon from "./images/canIcon.svg";
import playIcon from "./images/playIcon.svg";
import putIcon from "./images/putIcon.svg";
import finishedIcon from "./images/finishedIcon.svg";
import onIcon from "./images/onIcon.svg";
import uhohIcon from "./images/uhohIcon.svg";
import heyIcon from "./images/heyIcon.svg";

function App() {
  const wordArray = [
    ["I", iIcon],
    ["want", wantIcon],
    ["get", getIcon],
    ["make", makeIcon],
    ["not", notIcon],
    ["more", moreIcon],
    ["that", thatIcon],
    ["who", whoIcon],
    ["mine", mineIcon],
    ["go", goIcon],
    ["look", lookIcon],
    ["turn", turnIcon],
    ["help", helpIcon],
    ["all", allIcon],
    ["here", hereIcon],
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
    ["can", canIcon],
    ["play", playIcon],
    ["put", putIcon],
    ["finished", finishedIcon],
    ["on", onIcon],
    ["uh oh", uhohIcon],
    ["hey", heyIcon],
  ];

  // feeling bored? move the wordArray to a new file

  return (
    <>
      <header className="header">nav bar place holder</header>
      <body>
        <div className="sentence-bar">
          <SentenceBar />
        </div>

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
