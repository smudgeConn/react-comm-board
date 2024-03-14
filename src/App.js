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
    { text: "I", image: iIcon },
    { text: "want", image: wantIcon },
    { text: "get", image: getIcon },
    { text: "make", image: makeIcon },
    { text: "not", image: notIcon },
    { text: "more", image: moreIcon },
    { text: "that", image: thatIcon },
    { text: "who", image: whoIcon },
    { text: "mine", image: mineIcon },
    { text: "go", image: goIcon },
    { text: "look", image: lookIcon },
    { text: "turn", image: turnIcon },
    { text: "help", image: helpIcon },
    { text: "all", image: allIcon },
    { text: "here", image: hereIcon },
    { text: "what", image: whatIcon },
    { text: "you", image: youIcon },
    { text: "like", image: likeIcon },
    { text: "open", image: openIcon },
    { text: "do", image: doIcon },
    { text: "stop", image: stopIcon },
    { text: "some", image: someIcon },
    { text: "in", image: inIcon },
    { text: "where", image: whereIcon },
    { text: "it", image: itIcon },
    { text: "can", image: canIcon },
    { text: "play", image: playIcon },
    { text: "put", image: putIcon },
    { text: "finished", image: finishedIcon },
    { text: "on", image: onIcon },
    { text: "uh oh", image: uhohIcon },
    { text: "hey", image: heyIcon },
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
            return (
              <Tile
                key={word.text}
                imageURL={word.image}
                tileDescription={word.text}
              />
            );
          })}
        </div>
      </body>
    </>
  );
}

export default App;
