import React from 'react'

function Hero() {
  return (
    <div className='container text-center p-4'> 
        <div className='row'>
            <div className='col pt-4'>
                <h1>
                    Build your next project faster with SB UI Kit Pro
                </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio aliquam autem eaque recusandae facilis accusantium omnis, quidem molestiae eius itaque consequuntur! Provident laudantium sequi sit neque vitae ullam sed optio perspiciatis ipsam facilis porro natus alias nesciunt aliquid, recusandae est nihil voluptates saepe suscipit at debitis enim? Cumque, quae iure? Quasi sequi laboriosam vero quisquam nemo quibusdam totam quo suscipit?</p>
                <div className='d-flex justify-content-evenly'>
                    <button type="button" class="p-2 g-col-6 px-4 btn btn-primary btn-lg font-weight-bold">Explore Pages</button>
                    <button type="button" class=" px-4 btn-secondary btn btn-lg font-weight-bold">Documentation</button>
                </div>
            </div>
            <div className='col'>
                <img src="https://sb-ui-kit-pro.startbootstrap.com/assets/img/illustrations/programming.svg" alt="error" />
            </div>
        </div>
    </div>
  )
}

export default Hero