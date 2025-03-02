import React from 'react';

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg pt-2">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Webmastery.pro</a>
            <span className="navbar-toggler navbar-toggler-icon" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav justify-content-end  me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Landings</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href='#'>Documentation</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>Bootstrap Projects</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <div className=''>
                <button type="button" class="btn px-4 bg-primary bg-gradient"
                   style={{color: '#ffffff'}}
                >Buy Now</button>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

//  <a className="nav-link active" aria-current="page" href="#">Home</a>
// </li>
// <li className="nav-item">
// <a className="nav-link" href="#">Landings</a>
// </li>
// <li className="nav-item">
//     <a className="nav-link">Documentation</a>
// </li>
// <li className="nav-item">
//     <a className="nav-link">Bootstrap Projects</a>
// </li>
