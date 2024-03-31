import "./App.css";
import { useState, useEffect } from "react";
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
// import differentIcon from "./images/differentIcon.svg";
// import goodIcon from "./images/goodIcon.svg";
// import heIcon from "./images/heIcon.svg";
// import sheIcon from "./images/sheIcon.svg";

// universalCoreVocabulary array:
// an array of objects with text and image properties
const universalCoreVocabulary = [
  { text: "like", image: likeIcon },
  { text: "want", image: wantIcon },
  { text: "get", image: getIcon },
  { text: "make", image: makeIcon },
  { text: "good" },
  { text: "more", image: moreIcon },
  { text: "not", image: notIcon },
  { text: "go", image: goIcon },
  { text: "look", image: lookIcon },
  { text: "turn", image: turnIcon },
  { text: "help", image: helpIcon },
  { text: "different" },
  { text: "I", image: iIcon },
  { text: "he" },
  { text: "open", image: openIcon },
  { text: "do", image: doIcon },
  { text: "put", image: putIcon },
  { text: "same" },
  { text: "you", image: youIcon },
  { text: "she" },
  { text: "that", image: thatIcon },
  { text: "up" },
  { text: "all", image: allIcon },
  { text: "some", image: someIcon },
  { text: "it", image: itIcon },
  { text: "here", image: hereIcon },
  { text: "in", image: inIcon },
  { text: "on", image: onIcon },
  { text: "can", image: canIcon },
  { text: "finished", image: finishedIcon },
  { text: "where", image: whereIcon },
  { text: "what", image: whatIcon },
  { text: "why" },
  { text: "who", image: whoIcon },
  { text: "when" },
  { text: "stop", image: stopIcon },
];

// Button component
// IN: word (type: object), handleButtonClick (type: function)
// OUT: a div with an image and text
function MyButton({ word, handleButtonClick }) {
  const placeholderImage = "https://picsum.photos/200/300";
  const imageSource = word.image ? word.image : placeholderImage;
  const [backgroundColor, setBackgroundColor] = useState("#fdfffc");
  const onClick = () => {
    handleButtonClick();
    setBackgroundColor("#ff9f1c");
    setTimeout(() => {
      setBackgroundColor("#fdfffc");
    }, 500);
  };
  return (
    <div
      className="button"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      <img className="image" src={imageSource} alt="" />
      <span className="text">{word.text}</span>
    </div>
  );
}

// Message component
// IN: message (type: array)
// OUT: a div with a message
function Message({ message }) {
  return <div className="message">{message}</div>;
}

let currentMessageIndex = -1; // -1 means no message is selected
// ask Rob if this is acceptable to place outside of the App component

// App component
// IN: none
// OUT: a div with a message window and a board
export default function App() {
  //
  // handleButtonClick function
  // IN: word (type: object)
  // ACTION: make a copy of the message array,
  // add a Button component to the end of the array,
  // and set the message state to the new array
  // OUT: none
  function putWordInMessage(word) {
    const nextMessage = message.slice();
    if (nextMessage.length < 10) {
      nextMessage.push(
        <MyButton
          className="message-word"
          key={nextMessage.length}
          word={word}
        />
      );
    }
    setMessage(nextMessage);
  }

  function ArrowsDoStuff() {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowUp") {
        if (history.length > 0 && currentMessageIndex <= history.length - 1) {
          if (currentMessageIndex < history.length - 1) currentMessageIndex++;
          setMessage(history[currentMessageIndex]);
        }
      } else if (e.key === "ArrowDown") {
        if (history.length > 0 && currentMessageIndex > 0) {
          currentMessageIndex--;
          setMessage(history[currentMessageIndex]);
        }
      }
      console.log("currentMessageIndex", currentMessageIndex);
    };

    useEffect(() => {
      document.addEventListener("keydown", handleKeyPress);

      return function () {
        document.removeEventListener("keydown", handleKeyPress);
      };
    });
  }

  // handleClearClick function
  // IN: none
  // ACTION: set the message state to an empty array
  // OUT: none
  function handleClearClick() {
    if (currentMessageIndex === -1) {
      history.unshift(message);
      setHistory(history);
    }
    setMessage([]);
    currentMessageIndex = -1;
  }

  // handleDeleteClick function
  // IN: none
  // ACTION: remove the last Button component from the message array
  // OUT: none
  function handleDeleteClick() {
    const nextMessage = message.slice();
    nextMessage.pop();
    setMessage(nextMessage);
  }

  // message state:
  // message array (begins as empty array)
  // setMessage function (updates the message array)
  const [message, setMessage] = useState([]);

  const [history, setHistory] = useState([]);
  console.log("history", history);
  console.log("Hx length", history.length);

  return (
    <div className="app">
      <ArrowsDoStuff />
      <div className="side-nav">under construction</div>
      <div className="message-window">
        <Message message={message} className="message" />
        <div className="message-buttons">
          <button className="clear-btn" onClick={handleClearClick}>
            CLEAR ALL
          </button>
          <button className="del-btn" onClick={handleDeleteClick}>
            DELETE
          </button>
        </div>
      </div>
      <div className="nav-bar">N A V B A R </div>
      <div className="board">
        {universalCoreVocabulary.map((word) => {
          return (
            <MyButton
              key={word.text}
              word={word}
              handleButtonClick={() => putWordInMessage(word)}
            />
          );
        })}
      </div>
    </div>
  );
}
