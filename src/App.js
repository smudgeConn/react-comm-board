
import './App.css';
import Tile from './Tile';
import IIcon from './images/I-icon.svg';
import wantIcon from './images/wantIcon.svg';

function App() {
  const wordArray = [
    "I",
    "want",
    "get",
    "make",
    "not",
    "more",
    "that",
    "who",
    "mine",
    "go",
    "look",
    "turn",
    "help",
    "all",
    "here",
    "what",
    "you",
    "like",
    "open",
    "do",
    "stop",
    "some",
    "in",
    "where",
    "it",
    "can",
    "play",
    "put",
    "all done",
    "on",
    "uh oh",
    "hey",
  ]
  return (
    <><header>

    </header>
    <body>
      <div className="tile-container">
        {
          wordArray.map( word => {
            return <Tile imageURL="http://placekitten.com/200/200" tileDescription={word}/>
          })
        } 
        {/* <Tile imageURL={ IIcon } tileDescription="I" alt="me by Ignat from Noun Project (CC BY 3.0)"/>
        <Tile imageURL={ wantIcon } tileDescription="want" alt="Open Hand by lakonicon from Noun Project (CC BY 3.0)"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="get"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="make"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="not"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="more"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="that"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="who"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="mine"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="go"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="look"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="turn"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="help"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="all"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="here"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="what"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="you"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="like"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="open"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="do"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="stop"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="some"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="in"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="where"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="it"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="can"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="play"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="put"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="alldone"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="on"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="uhoh"/>
        <Tile imageURL="http://placekitten.com/200/200" tileDescription="hey"/> */}
        {
          // Create a loop to generate the tiles
          // Create an array of objects
          // Each object has a URL and a description
          // Use the map function to loop through the array
          // For each object in the array, create a Tile component
          // Pass the URL and description to the Tile component
          // The Tile component will use the URL and description to create an image and a description
          // The Tile component will return the image and description
          // The map function will return an array of images and descriptions
          // The array of images and descriptions will be rendered to the screen
        }


      </div>
    </body></>
  );
}

export default App;
