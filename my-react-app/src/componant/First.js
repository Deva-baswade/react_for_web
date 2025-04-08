import React,{useState} from 'react'

export default function First(props) {
  const handleclick = ()=>{   
    let usetext = text.toUpperCase()
    settext(usetext) 
    props.showAlert("Text in upeer case","success");  
  }
  const handleclick1 = ()=>{   
    let usetext = text.toLowerCase()
    settext(usetext)
    props.showAlert("Text in lower case","success");   
  }
  const handleclearclick = ()=>{
    settext("");
    props.showAlert("You are clear text","success");
  }
  const handlechange1click = ()=>{
    const body = document.body;
    body.style.backgroundColor = "black"
    body.style.color = "white"
    props.showAlert("the dark mode enabled","success");
  }
  const handlechangeclick = ()=>{
    const body = document.body;
    body.style.backgroundColor = "white"
    body.style.color = "black"
    props.showAlert("the light mode enabled","success");
  }
  const handleOnChange = (event)=>{     
    settext(event.target.value)    
  }
  const [text , settext] = useState("enter the text") 
  return (
    <>    
     <div className="box1">
    <h1>{props.h1}</h1>   
    <textarea   type="text"  className={`form-control bg-${props.mode}`} id="exampleInputEmail1"  value={text}  onChange={handleOnChange}  style={{ width: '900px', height: '200px' }}  aria-describedby="emailHelp" />    
    <button type="submit" className="btn btn-primary mx-3" onClick={handleclick} >Change to upperCase</button>
    <button type="submit" className="btn btn-primary" onClick={handleclick1} >Change to upperCase</button>
    <button type="submit" className="btn btn-primary mx-3" onClick={handleclearclick} >Clear the textarea</button>
    <button type="submit" className="btn btn-primary mx-3" onClick={handlechange1click} >mode to black</button>
    <button type="submit" className="btn btn-primary mx-3" onClick={handlechangeclick} >mode to white</button>
    </div>
    <div className='box1 my-3'>
      <h1>Below count the words</h1>
      <p>{text.split(" ").length} words and the {text.length}char</p>
      <p>{0.008 * text.split(" ").length }  minute for reading</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
    
  )
}
