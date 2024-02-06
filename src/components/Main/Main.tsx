import React from 'react'

// home component import
import Home from './Home/Home';

// styles
import './styles/Main.css';

const Main = () => {
  return (
    <main className="main">
      <div className="main-container">
        <div className="main__bg-square square-top"></div>
        <div className="main__bg-square square-bottom"></div>
        <Home />
      </div>
    </main>
  )
}

export default Main