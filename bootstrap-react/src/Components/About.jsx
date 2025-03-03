import React from 'react'

function About() {
  return (
    <div className='container mt-4 pt-2'>
        <h1 className='text-center fw-bold'
            style={{
                fontSize: '2.6rem'
            }}
        >
            About Me
        </h1>
        <p style={{
            textAlign: 'justify',
            padding: '20px 0px 20px 25px',
            fontSize: '14px'
        }} className=''>Highly skilled and detail oriented Frontend Developer with a strong command of modern web technologies,including HTML, CSS, JavaScript, TypeScript, React, Redux, Zod, and Routing. Experienced in building responsive, high-performance, and scalable web applications with a keen focus on user experience (UX) and interface (UI) design. Proficient in Git and GitHub for version control and collaboration, ensuring efficient code management and teamwork.</p>
        <div className='text-center'>
            <div>
            <h1 className='text-center fw-bold'style={{fontSize: '2.6rem'}}>My Skills</h1>
            </div>
        </div>
    </div>
  )
}

export default About