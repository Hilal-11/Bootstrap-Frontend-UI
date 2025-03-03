import React from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import About from './Components/About';
import FAQ from './Components/FAQ';
import Carasole from './Components/Carasole';
import Contect from './Components/Contect';
import Water from './Components/Water';
function App() {
  return (
    <div>
      {/* Header secession */}
      <div className='shadow-lg p-2 mb-4 bg-body-tertiary rounded'>
        <div className="container">
            <div className=''>
              <Navigation/>
            </div>
        </div>
      </div>
    <div>
      {/* Hero secession */}
      <div className='container'>
        <Hero/>
      </div>
    </div>
    <br /> <br />
    <div className='mt-4 pb-4'
    style={{
      backgroundColor: '#93c5fd'
    }}>

      {/* Projects secession */}
    <br /> <br />
      <div className='container' 
      style={{
        paddingTop: '30px'
      }}>
        <Cards/>
      </div>
    </div>

      {/* about secession */}
    <div>
      <About />
    </div>

      {/* FAQ's secession */}
    <div className='pb-4' 
    style={{
      backgroundColor: 'darkblue'
    }}>
      <br /><br /><br />
      <FAQ />
      <br /><br /><br />
    </div>

      {/* Carasole us secession */}
      <br /><br />
    <div>
      <Carasole />
    </div>
    {/* contect us secession */}
    <br /><br />
    <div>
      <Contect/>
    </div>
    <div className='container pt-4 mt-4 d-flex justify-content-center'>
      <Water />
    </div>
      {/* Footer secession */}

    <br /><br />


    </div>
  );
}

export default App;