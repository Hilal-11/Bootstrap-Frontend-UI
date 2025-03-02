import React from 'react'

function Hero() {
  return (
    <div className='container p-4'> 
        <div className='d-flex flex-column flex-md-row'>
            <div className='col pt-4 '>
                <h1 className='text-center'>
                    Build your next project faster with SB UI Kit Pro
                </h1>
                <p className='pt-4 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio aliquam autem eaque recusandae facilis accusantium omnis, quidem molestiae eius itaque consequuntur! Provident laudantium sequi sit neque vitae ullam sed optio perspiciatis ipsam facilis porro natus alias nesciunt aliquid, recusandae est nihil voluptates saepe suscipit.</p>
                <div className='d-flex flex-column flex-md-row justify-content-evenly g-4'>
                    <button type="button" class="bg-primary bg-gradient mt-2 p-2 g-col-6 px-4 btn  btn-lg btn-md-sm "style={{color: 'white'}}>Explore Pages</button>
                    <button type="button" class="mt-2  px-4 btn-secondary btn btn-lg btn-md-sm ">Documentation</button>
                </div>
            </div>
            <div className='col pt-4'>
                <img src="https://sb-ui-kit-pro.startbootstrap.com/assets/img/illustrations/programming.svg" alt="error" />
            </div>
        </div>
    </div>
  )
}

export default Hero