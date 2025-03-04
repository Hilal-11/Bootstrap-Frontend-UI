import React from 'react'

function Carasole() {
  return (
    <div className='container mt-2 p-2'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwmx5ZcdJKpXeozr0V_Eo4mZgKUNfpOBhlA&s" className="img-fluid rounded d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0xyIOTTJ_WMKP7DtlMziOqEd0awXkcdD8g&s" className="img-fluid rounded d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-webpack.png" className="img-fluid rounded d-block w-100 " alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>

    </div>
  )
}

export default Carasole