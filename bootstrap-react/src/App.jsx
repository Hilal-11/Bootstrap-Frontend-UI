import React from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
function App() {
  return (
    <div className="container">
      <div>
        <Navigation/>
      </div>
      <div className='container'>
        <Hero/>
      </div>
    </div>
  );
}

export default App;