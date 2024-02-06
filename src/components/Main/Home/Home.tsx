import React from 'react'

// header component import
import Header from './Header/Header'

// styles import
import './styles/Home.css';

const Home = () => {
  return (
    <section className="home">
      <Header />

      <div className="home__content">
        <p className="home__paragraph">
          hello! i'm
        </p>
        <h1 className="home__title">
          andriy bobyk
        </h1>
      </div>
    </section>
  )
}

export default Home