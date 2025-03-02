import React from 'react'
function Navigation() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg py-4">
            <div className="container d-flex justify-content-between position-relative">
               <div className=''>
                    <a className="navbar-brand font-weight-bold" href="#">SB UI Kit Pro</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
               </div>
                <div className="position-absolute end-0 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="#">Landings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold">Documentation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold">Bootstrap Projects</a>
                        </li>
                        <div className='mx-4 '>
                            <button type="button" class="btn btn-primary btn-lg font-weight-bold">Buy Now</button>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation