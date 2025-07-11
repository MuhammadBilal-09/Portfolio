import React from 'react'
import './assets/css/main.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      
      <div className="app-container">
        <div id="wrapper">
          <Navbar />
            <div id="main">
              <Home />
              <Work />
              <Contact />
            </div>
              <Footer />
        </div>
      </div>
    
    </div>
  )
}

export default App