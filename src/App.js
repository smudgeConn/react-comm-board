import "./App.css";
import { useState } from "react";
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

// Button component
// IN: word (type: object), handleButtonClick (type: function)
// OUT: a div with an image and text
function MyButton({ word, handleButtonClick }) {
  return (
    <div
      className="button"
      style={{ backgroundColor: "#fdfffc" }}
      onClick={handleButtonClick}
    >
      <img className="image" src={word.image} alt="" />
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
  function handleButtonClick(word, isMouseDown) {
    const nextMessage = message.slice();
    nextMessage.push(<MyButton key={word.text} word={word} />);
    setMessage(nextMessage);
  }

  // handleClearClick function
  // IN: none
  // ACTION: set the message state to an empty array
  // OUT: none
  function handleClearClick() {
    setMessage([]);
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

  // wordList array:
  // an array of objects with text and image properties
  const wordList = [
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

  // message state:
  // message array (begins as empty array)
  // setMessage function (updates the message array)
  const [message, setMessage] = useState([]);

  return (
    <>
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
      <div className="board">
        {wordList.map((word) => {
          return (
            <MyButton
              key={word.text}
              word={word}
              handleButtonClick={() => handleButtonClick(word)}
            />
          );
        })}
      </div>
    </>
  );
}
