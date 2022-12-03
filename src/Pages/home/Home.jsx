import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div className='home__container'>
      <h1 className='home__title'>Hello, my name is <span>Javier Alejandro</span> and I'm a FullStack Developer</h1>
      <p className='home__paragraph'>
      I want to provide an excellent service as a developer and if you are interested in my work, talk to me so we can get to know each other and start a very good working relationship.
      </p>
      <div className='home__btn'>
        <Link to="/proyects">
          <button className='bton btn__proyects'>My Work</button>
        </Link>
        <Link to="/contact">
          <button className='bton btn__contact'>Let's Talk</button>
        </Link>
      </div>
    </div>
  )
}

export default Home