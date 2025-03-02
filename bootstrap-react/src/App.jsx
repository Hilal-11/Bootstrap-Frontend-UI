import React from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
function App() {
  return (
    <div>
      {/* Header secession */}
      <div className="container">
      <div>
        <Navigation/>
      </div>
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