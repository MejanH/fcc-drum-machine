import React from "react";
import { useEffect } from "react";

export default function Button(props: any) {
  var audio = new Audio(props.url);

  function triggerKey(event: any) {
    let key = event.keyCode;

    if (key === props.code) {
      audio.play();
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", triggerKey);

    return () => {
      window.removeEventListener("keydown", triggerKey);
    };
  }, []); //eslint-disable-line

  function onButtonClick() {
    audio.play();
  }
  return (
    <button className="drum-pad" onKeyDown={triggerKey} onClick={onButtonClick}>
      {props.trigger}
    </button>
  );
}
