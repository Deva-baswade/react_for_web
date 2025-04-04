import React,{useState} from 'react'

export default function First(props) {
  const handleclick = ()=>{
    console.log("click button");
    let usetext = text.toUpperCase()
    settext(usetext)
    

  }
  const handleOnChange = (event)=>{ 
    console.log("fired");
    
    settext(event.target.value)
    
  }
  const [text , settext] = useState("enter the text")
  
  
  return (
    <>
    
     <div className="box1">
    <h1>{props.h1}</h1> 
    <textarea type="text" className="form-control" id="exampleInputEmail1" value={text}  onChange={handleOnChange}   row="10" cols="8"   aria-describedby="emailHelp" />
   
    
    <button type="submit" className="btn btn-primary" onClick={handleclick} >Change to upperCase</button>
    </div>
    </>
    
  )
}
