import React, { useState }  from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleRemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success");
    }
    // const handleCapitalClick = () => {
    //     // let str = text.toString();
    //     // let newText =  str.charAt(0).toUpperCase() + str.substring(1);
    //     // setText(newText);
    //     // document.getElementById("mybox").classList.add('first-letter-uppercase');
    // }


    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // text = "new text"; // wrong way to change the state
    // setText("new text"); //correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2 className='mb-2'>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#5566':'white',color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.length} Characters and {text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} Words</p>
            <p>Reading Time: {0.008 * text.split(" ").filter((element)=>{ return element.length !== 0}).length} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Try TextUtils to preview your text here"}</p>
        </div>
        </>
    )
}
