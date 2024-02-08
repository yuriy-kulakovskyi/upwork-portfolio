import React from 'react'

// styles
import './styles/Main.css';

// home component import
import Home from './Home/Home';

// services component import
import Services from './Services/Services';

const Main = () => {
  return (
    <main className="main">
      <div className="main-container">
        {/* fixed squares */}
        <div className="main__bg-square square-top"></div>
        <div className="main__bg-square square-bottom"></div>

        {/* home component */}
        <Home />

        {/* paste "about" component here... */}

        {/* services */}
        <Services />
      </div>
    </main>
  )
}

export default Main;