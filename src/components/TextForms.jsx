import React, { useState } from 'react'


export default function TextForms(props) {
    const handleUpClick = () =>{
        console.log("Upper case is clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to UpperCase !!", "Success: ");
    }

    const handleLoClick = () =>{
        console.log("Lower case is clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("Converted to LowerCase !!", "Success: ");
    }

    const handleClearClick = () =>{
        console.log("Lower case is clicked" + text);
        let newText = ''; 
        setText(newText);
        props.showAlert("Cleared Text !!", "Success: ");
    }
    const handleOnChange = (event) =>{
        console.log("On changed");
        setText(event.target.value);
    }
 

    const [text, setText] = useState('Enter Text here');
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'? 'white' : '#262A56'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? '#262A56' : 'white', color:props.mode==='dark'? 'white' : '#262A56'}} id="mybox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'? 'white' : '#262A56'}}>
                <h1>Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
            </div>
        </>
    )
}
