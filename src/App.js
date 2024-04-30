import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
import differentIcon from "./images/differentIcon.svg";
import whenIcon from "./images/whenIcon.svg";
import upIcon from "./images/upIcon.svg";
import sameIcon from "./images/sameIcon.svg";
import whyIcon from "./images/whyIcon.svg";
import iIcon from "./images/meIcon.svg";
import wantIcon from "./images/wantIcon.svg";
import getIcon from "./images/getIcon.svg";
import makeIcon from "./images/makeIcon.svg";
import notIcon from "./images/notIcon.svg";
import moreIcon from "./images/moreIcon.svg";
import thatIcon from "./images/thatIcon.svg";
import whoIcon from "./images/whoIcon.svg";
// import mineIcon from "./images/mineIcon.svg";
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
import putIcon from "./images/putIcon.svg";
import finishedIcon from "./images/finishedIcon.svg";
import onIcon from "./images/onIcon.svg";
// import { type } from "@testing-library/user-event/dist/type";
import goodIcon from "./images/goodIcon.svg";
import heIcon from "./images/heIcon.svg";
import sheIcon from "./images/sheIcon.svg";

const universalCoreVocabulary = [
  { text: "like", image: likeIcon, type: "verb" },
  { text: "want", image: wantIcon, type: "verb" },
  { text: "get", image: getIcon, type: "verb" },
  { text: "make", image: makeIcon, type: "verb" },
  { text: "good", image: goodIcon, type: "description" },
  { text: "more", image: moreIcon, type: "description" },
  { text: "not", image: notIcon, type: "negation" },
  { text: "go", image: goIcon, type: "verb" },
  { text: "look", image: lookIcon, type: "verb" },
  { text: "turn", image: turnIcon, type: "verb" },
  { text: "help", image: helpIcon, type: "verb" },
  { text: "different", image: differentIcon, type: "description" },
  { text: "I", image: iIcon, type: "pronoun" },
  { text: "he", image: heIcon, type: "pronoun" },
  { text: "open", image: openIcon, type: "verb" },
  { text: "do", image: doIcon, type: "verb" },
  { text: "put", image: putIcon, type: "verb" },
  { text: "same", image: sameIcon, type: "description" },
  { text: "you", image: youIcon, type: "pronoun" },
  { text: "she", image: sheIcon, type: "pronoun" },
  { text: "that", image: thatIcon, type: "pronoun" },
  { text: "up", image: upIcon, type: "preposition" },
  { text: "all", image: allIcon, type: "description" },
  { text: "some", image: someIcon, type: "description" },
  { text: "it", image: itIcon, type: "pronoun" },
  { text: "here", image: hereIcon, type: "preposition" },
  { text: "in", image: inIcon, type: "preposition" },
  { text: "on", image: onIcon, type: "preposition" },
  { text: "can", image: canIcon, type: "verb" },
  { text: "finished", image: finishedIcon, type: "verb" },
  { text: "where", image: whereIcon, type: "question" },
  { text: "what", image: whatIcon, type: "question" },
  { text: "why", image: whyIcon, type: "question" },
  { text: "who", image: whoIcon, type: "question" },
  { text: "when", image: whenIcon, type: "question" },
  { text: "stop", image: stopIcon, type: "verb" },
];

// Button component
// IN: word (type: object), handleButtonClick (type: function)
// OUT: a div with an image and text
function MyButton({ word, handleButtonClick }) {
  const placeholderImage = "https://picsum.photos/100/100";
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
      className="my-button"
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
  function putWordInMessage(word) {
    const nextMessage = message.slice();
    if (nextMessage.length < 9) {
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
  // console.log("history", history);
  // console.log("Hx length", history.length);

  return (
    <div className="app">
      <ArrowsDoStuff />
      {/* <div className="side-nav">side-nav</div> */}
      <div className="message-window">
        <Message message={message} />
        <div className="message-buttons">
          <button className="clear-btn" onClick={handleClearClick}>
            CLEAR ALL
          </button>
          <button className="del-btn" onClick={handleDeleteClick}>
            DELETE
          </button>
        </div>
      </div>
      <div className="nav-bar"> </div>
      <div className="board">
        {universalCoreVocabulary.map((word) => {
          return (
            <MyButton
              className="my-button"
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
