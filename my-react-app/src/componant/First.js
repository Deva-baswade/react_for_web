import React,{useState} from 'react'

export default function First(props) {
  const handleclick = ()=>{   
    let usetext = text.toUpperCase()
    settext(usetext)   
  }
  const handleclick1 = ()=>{   
    let usetext = text.toLowerCase()
    settext(usetext)   
  }
  const handleOnChange = (event)=>{     
    settext(event.target.value)    
  }
  const [text , settext] = useState("enter the text") 
  return (
    <>    
     <div className="box1">
    <h1>{props.h1}</h1> 
    <textarea type="text" className="form-control" id="exampleInputEmail1" value={text}  onChange={handleOnChange}   row="10" cols="8"   aria-describedby="emailHelp" />
    
    <button type="submit" className="btn btn-primary mx-3" onClick={handleclick} >Change to upperCase</button>
    <button type="submit" className="btn btn-primary" onClick={handleclick1} >Change to upperCase</button>
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
