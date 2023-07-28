import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createCard(props) {
  return (
    <Entry
      key={props.id}
      id={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
