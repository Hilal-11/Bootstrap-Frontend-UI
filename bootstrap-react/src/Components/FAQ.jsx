import React from 'react'

function FAQ() {
  return (
    <div className='container mt-4 pt-4 '>
    <div class="accordion accordion-flush" id="accordionFlushExample">
         <div class="accordion-item rounded ">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed fw-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                React and Vite 
            </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quibusdam illo id aliquam voluptas, molestiae officia obcaecati ut mollitia vel soluta nostrum optio inventore, minus aliquid. Libero, atque sint. Perspiciatis!</div>
            </div>
        </div> <br />
        <div class="accordion-item rounded">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed fw-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Javascript and Typescript
            </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde ratione dolore nobis obcaecati eaque omnis quod dolor eligendi aliquam?</div>
            </div>
        </div> <br />
        <div class="accordion-item rounded">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed fw-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Microservices and Node-Js
            </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
        </div><br />

        <div class="accordion-item rounded">
            <h2 class="accordion-header rounded">
            <button class="accordion-button collapsed fw-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Express and MongoDB
            </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FAQ