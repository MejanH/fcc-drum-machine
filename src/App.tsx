import React, { useEffect, useState } from "react";
import { drumCore } from "./lib/data";
import Button from "./components/Button";

function App() {
  useEffect(() => {
    //        https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

    const script = document.createElement("script");
    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [clip, setClip] = useState("");
  const [id, setID] = useState("");

  function keyPress(event: any) {
    for (let index = 0; index < drumCore.length; index++) {
      if (drumCore[index].keyCode === event.keyCode) {
        setClip(drumCore[index].id);
        var sound = document.getElementById(
          drumCore[index].keyTrigger
        ) as HTMLMediaElement;
        if (sound) {
          sound.play();
        }
        // new Audio(drumCore[index].url).play();
      }
    }
  }
  var audio = document.getElementById(id) as HTMLMediaElement;
  if (audio) {
    audio.play();
  }
  useEffect(() => {
    window.addEventListener("keydown", keyPress);

    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, []); // eslint-disable-line
  return (
    <div className="App">
      <main id="drum-machine">
        <h1 style={{ textAlign: "center" }}>Drum Machine</h1>
        <div className="buttons">
          {drumCore.map((tool) => (
            <button
              key={tool.id}
              className="drum-pad"
              id={tool.id}
              onKeyDown={keyPress}
              onClick={() => {
                setID(tool.keyTrigger);
                setClip(tool.id);
              }}
            >
              {tool.keyTrigger}
              <audio
                src={tool.url}
                className="clip"
                id={tool.keyTrigger}
              ></audio>
            </button>
          ))}
        </div>
        <div id="display" onKeyDown={keyPress}>
          {clip}
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">
          by <strong>Muhammad Mejanul Haque</strong>
        </p>
      </footer>
    </div>
  );
}

export default App;
