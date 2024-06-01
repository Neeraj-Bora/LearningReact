import React,{useState} from 'react'

export default function Textform(props){
    const handleUpClick=()=>{
        // console.log("Clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE!","success")
    }
    const handleOnChange=(event)=>{
        // console.log("onChange")
        setText(event.target.value);
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearText=()=>{
        setText("");
    }
    const [text,setText]= useState("");
    //text="hhbhjbsjbgbvghj" wrong way to change state
    //setText("new text")  correct way to set text
    return(
        <>
            <div className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label">Enter Text Here</label>
                <textarea className="form-control" value={text} id="myBox" rows="3" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'rgb(250,250,250)':'rgb(33,33,33)' , color: props.mode==='light'?'black':'white'}}></textarea>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split("/\s/").filter((element)=>{return element.length!==0}).length} Minutes reading time</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter text in the above texbox to preview it"}</p>
            </div>
        </>
    )
}