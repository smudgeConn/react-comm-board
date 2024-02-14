import "./App.css";
import Tile from "./Tile";
import IIcon from "./images/I-icon.svg";
import wantIcon from "./images/wantIcon.svg";

function App() {
  const wordArray = [
    ["I", IIcon],
    ["want", wantIcon],
    ["get", "http://placekitten.com/200/200"],
    ["make", "http://placekitten.com/200/200"],
    ["not", "http://placekitten.com/200/200"],
    ["more", "http://placekitten.com/200/200"],
    ["that", "http://placekitten.com/200/200"],
    ["who", "http://placekitten.com/200/200"],
    ["mine", "http://placekitten.com/200/200"],
    ["go", "http://placekitten.com/200/200"],
    ["look", "http://placekitten.com/200/200"],
    ["turn", "http://placekitten.com/200/200"],
    ["help", "http://placekitten.com/200/200"],
    ["all", "http://placekitten.com/200/200"],
    ["here", "http://placekitten.com/200/200"],
    ["what", "http://placekitten.com/200/200"],
    ["you", "http://placekitten.com/200/200"],
    ["like", "http://placekitten.com/200/200"],
    ["open", "http://placekitten.com/200/200"],
    ["do", "http://placekitten.com/200/200"],
    ["stop", "http://placekitten.com/200/200"],
    ["some", "http://placekitten.com/200/200"],
    ["in", "http://placekitten.com/200/200"],
    ["where", "http://placekitten.com/200/200"],
    ["it", "http://placekitten.com/200/200"],
    ["can", "http://placekitten.com/200/200"],
    ["play", "http://placekitten.com/200/200"],
    ["put", "http://placekitten.com/200/200"],
    ["all done", "http://placekitten.com/200/200"],
    ["on", "http://placekitten.com/200/200"],
    ["uh oh", "http://placekitten.com/200/200"],
    ["hey", "http://placekitten.com/200/200"],
  ];

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
