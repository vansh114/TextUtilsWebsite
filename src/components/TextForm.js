import React, { useState } from "react"

export default function TextForm(props) {

    const handleUpClick = () => {
        if(text === ""){
            props.showAlert("Please Enter Something!", "warning");
        }
        else{
            console.log("Uppercase was clicked:", text);
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Coverted to Uppercase!", "success");
        }
    }

    const handleLowClick = () => {
        if(text === ""){
            props.showAlert("Please Enter Something!", "warning");
        }
        else{
            console.log("Lowercase was clicked:", text);
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Coverted to Lowercase!", "success");
        }
    }

    const handleClearClick = () => {
        if(text === ""){
            props.showAlert("Please Enter Something!", "warning");
        }
        else{
            console.log("Clear Text was clicked:", text);
            setText("");
            props.showAlert("Text Cleared!", "success");
        }
    }

    const handleCopy = () => {
        if(text === ""){
            props.showAlert("Please Enter Something!", "warning");
        }
        else{
            navigator.clipboard.writeText(text);
            props.showAlert("Copied to Clipboard!", "success");
        }
    }

    const handleExtraSpace = () => {
        if(text === ""){
            props.showAlert("Please Enter Something!", "warning");
        }
        else{
            let newText = text.split(/[ ]+/).join(" ").trim();
            setText(newText);
            props.showAlert("Extra Spaces Removed!", "success");
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "New Text"; Wrong way to chang the text
    // setText("New Text");

    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'black' : 'white'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control text" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#252525', color: props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>

            <div className={`container my-2 text-${props.mode === 'light' ? 'black' : 'white'}`}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p style={{fontSize: '1.25rem'}}>{text.length > 0 ? text : "Nothing to Preview!"}</p>
            </div>
        </>
    )
}
