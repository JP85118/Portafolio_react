import { Link } from "react-router-dom"
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
import './footer.css'

const Footer = () => {

  const isLogged = localStorage.getItem("token") ? true : false;

  if (isLogged) {
    return (
      <footer>
        <div className="footer__container">
          <ul className="footer__links">
            <li className="link">
              <a href="https://github.com/JP85118"><AiFillGithub/></a> 
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <small>2022 JP85118 &reg; All Rights Reserved</small>
              <Link to="/proyects">Proyects</Link>
              <Link to="/contact">Contact</Link>
              <a href="https://dribbble.com"><AiOutlineDribbble/></a> 
            </li>
          </ul>
        </div>
      </footer>
    )
  }

  if (!isLogged) {
    return(<p className="paragraph">Debe iniciar sesion // Recargar la pagina para acceder al Portafolio 😁</p>)
  }
}

export default Footer