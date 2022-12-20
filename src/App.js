import React from "react";
import "./styles.css";
import { useState } from "react";

let emojiDictionary = {
  "🥰": "Smiling Face with Hearts",
  "😒 ": "Unamused Face",
  "🤫": "Shushing Face",
  "🤣": " Rolling on the Floor Laughing",
  "🤝": "Handshake",
  "🤩": "Star-Struck",
  "🤔": " Thinking Face",
  "😏": "Smirking Face",
  "🤗": "Hugging Face",
  "😷": "Face with Medical Mask"
};

export default function App() {
  let [meaningOfInputEmoji, setMeaningOfInputEmoji] = useState("");
  // let [meaningOfClickedtEmoji, setMeaningOfClickedEmoji] = useState("");
  let emojiArray = Object.keys(emojiDictionary);
  function searchInputHandler(event) {
    let userInput = event.target.value;

    meaningOfInputEmoji = emojiDictionary[userInput];
    //search userInput in emoji dictionary
    if (meaningOfInputEmoji) {
      setMeaningOfInputEmoji(meaningOfInputEmoji);
    } else {
      setMeaningOfInputEmoji(
        "The emoji is not currently present in dictionary"
      );
    }
  }
  function emojiClickHandler(emojiItem) {
    setMeaningOfInputEmoji(emojiDictionary[emojiItem]);
  }
  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1 style={{ color: "#a7f3d0" }}>Interpret Emoticons right Way !</h1>
      <input onChange={searchInputHandler} style={{ fontSize: "1.75rem" }} />
      <div className="output" style={{ color: "yellow", fontSize: "1.2rem" }}>
        {meaningOfInputEmoji}
      </div>

      {emojiArray.map((item) => {
        return (
          <span
            onClick={() => {
              emojiClickHandler(item);
            }}
            key={item}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
