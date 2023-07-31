import React, { useState } from "react";

export default function FormText(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","Success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","Success");
  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared!","Success")
  };
  const handleInClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Converted to Inverse!","Success")
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Space!","Success")
  };
  const handleCbClick = () => {
    console.log("i m copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","Success")
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>

        <div className="mb-3" >
          <label for="exampleFormControlTextarea1" className="form-label">
            <h3> Enter your text...</h3>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>
          Clear{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleInClick}>
          Inverse case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCbClick}>
          Copy to Clipboard
        </button>
      </div>
      <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}
