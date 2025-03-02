import React from 'react'

function Hero() {
  return (
    <div className='container  p-4'> 
        <div className='row'
            style={{
                paddingTop: '30px'
            }}
        >
            <div className='col pt-4 text-center'>
                <h1 className=''
                    style={{
                        fontSize: '4rem',
                        fontWeight: 'bold' 
                        
                    }}
                >
                    Build your next project faster with SB UI Kit Pro
                </h1>
                <p className=' pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio aliquam autem eaque recusandae facilis accusantium omnis, quidem molestiae eius itaque consequuntur! Provident laudantium sequi sit neque vitae ullam sed optio perspiciatis ipsam facilis porro natus alias nesciunt aliquid, recusandae est nihil voluptates saepe suscipit at debitis enim? Cumque, quae iure? Quasi sequi laboriosam vero quisquam nemo quibusdam totam quo suscipit?</p>
                <div className='d-flex justify-content-evenly pt-4'>
                    <button type="button" class="p-2 g-col-6 px-4 btn btn-primary btn-lg fw-bold">Explore Pages</button>
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