import React from 'react'

export default function Navbar(props) {
  const mysyle = {
    fontSize : "20px",
    color : "black",
    gap: "20px",
    marginTop:"0px",
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-light text-white">
    <div className="container-fluid">
      <a className="navbar-brand my-3" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"  style={mysyle}>TextChage</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          
         
        </ul>
        
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
