import { useState } from 'react';

// styles
import './styles/Main.css';

// home component import
import Home from './Home/Home';

// services component import
import Services from './Services/Services';

// achivments component import
import Achivments from './Achivments/Achivments';

const Main = () => {
  // followers state
  const [user, setUser] = useState({
    followers: 0,
    repos: 0
  });

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

        {/* achivments */}
        <Achivments user={user} setUser={setUser} />
      </div>
    </main>
  )
}

export default Main;