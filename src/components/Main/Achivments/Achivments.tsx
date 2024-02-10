import { useEffect, useState } from 'react'

// big text
import BigText from '../../BigText/BigText';

// styles
import './styles/Achivments.css';

type AchivmentsProps = {
  user: {
    followers: number;
    repos: number;
  }

  setUser: (user: any) => void;
}


const Achivments = (props: AchivmentsProps) => {
  // followers count state
  const [followers, setFollowers] = useState(0);
  
  // repos count state
  const [repos, setRepos] = useState(0);
  
  // cups of coffe state
  const [coffe, setCoffe] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/yuriy-kulakovskyi")
    .then(res => res.json())
    .then(data => {      
      props.setUser(
        {
          followers: data.followers,
          repos: data.public_repos
        }
      );
    })
  }, [props]);

  useEffect(() => {
    const coffeInterval = setInterval(() => {
      if (coffe < 1000) {
        setCoffe(prev => prev + 1);
      } else {
        clearInterval(coffeInterval);
      }
    }, 10)

    const followersInterval = setInterval(() => {
      if (followers < props.user.followers) {
        setFollowers(prev => prev + 1);
      } else {
        clearInterval(followersInterval);
      }
    }, 10)

    const reposInterval = setInterval(() => {
      if (repos < props.user.repos) {
        setRepos(prev => prev + 1);
      } else {
        clearInterval(reposInterval);
      }
    }, 10)

    return () => {
      clearInterval(coffeInterval);
      clearInterval(followersInterval);
      clearInterval(reposInterval);
    }
    
  }, [coffe, setCoffe, followers, setFollowers, repos, setRepos, props.user.followers, props.user.repos])

  

  return (
    <section className="achivments">
      <BigText paragraph='portfolio' title="my achievements" />

      <ul className="achivments__list">
        <li className="achivments__item">
          <h3 className="item__title">github followers</h3>
          <h1 className="item__number">{followers}</h1>
        </li>

        <li className="achivments__item">
          <h3 className="item__title">projects done</h3>
          <h1 className="item__number">{repos}</h1>
        </li>

        <li className="achivments__item">
          <h3 className="item__title">cups of cofee</h3>
          <h1 className="item__number">{coffe}</h1>
        </li>
      </ul>
    </section>
  )
}

export default Achivments;