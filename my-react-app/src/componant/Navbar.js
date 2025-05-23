import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const myStyle ={
    fontSize: "20px",
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white" >
    <div className="container-fluid">
      <a className="navbar-brand my-3" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="#" style={myStyle} >TextChage</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          
         
        </ul>
        <div className="form-check form-switch" mode={props.mode} onClick={props.togglemode}>
            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label  text-white" htmlFor="switchCheckDefault">Enable the darkmode</label>
         </div>
        
      </div>
    </div>
  </nav>
  )
}
// Navbar.propsTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string
// }

// navbar.defaultProps = {
//   title: "Set title here",
//   aboutText: "About text here"
// }
