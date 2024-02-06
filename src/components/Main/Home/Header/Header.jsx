import React from 'react'

// styles
import "../../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* user */}
      <div className="header__user">
        <div className="header__user-avatar"></div>
        <h3 className="header__user-name">Andriy Bobyk</h3>
      </div>

      {/* burger button */}
      <div className="header__burger-btn">
        <span className="burger-btn__line"></span>
        <span className="burger-btn__line"></span>
        <span className="burger-btn__line"></span>
      </div>
    </header>
  )
}

export default Header;