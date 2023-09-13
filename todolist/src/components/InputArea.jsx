import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleInputAreaChange(event) {
    const value = event.target.value;
    setInputText(value);
  }
  function hadelAddButton() {
    props.addButtonFunction(inputText);
    setInputText("");
  }

  return (
    <div className="form">
      <input onChange={handleInputAreaChange} type="text" value={inputText} />
      <button onClick={hadelAddButton}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
