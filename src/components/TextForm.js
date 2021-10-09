import { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick=() =>{
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handlelowClick=() =>{
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleclearClick=() =>{
        let newText= " ";
        setText(newText)
    }
    const handleonChange=(event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
      <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value= {text}
          onChange={handleonChange}
          style={{backgroundColor:props.mode === 'dark'?'grey':'light', color:props.mode === 'dark'?'white':'black' }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
      <button className="btn btn-success mx-2" onClick={handlelowClick}>convert to Lowercasecase</button>
      <button className="btn btn-secondary mx-2" onClick={handleclearClick}>Clear text</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summary has</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes are taken to read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>

    </div>

    </>
  );
}
