import React from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
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
    <div className='mt-4'
    style={{
      backgroundColor: '#93c5fd'
    }}>

      {/* Cards secession */}
    <br /> <br />
      <div className='container' 
      style={{
        paddingTop: '30px'
      }}>
        <Cards/>
      </div>
    </div>
    </div>
  );
}

export default App;