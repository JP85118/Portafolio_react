import { NavLink } from "react-router-dom"
import {links} from '../data'
import './navbar.css'

const Navbar = () => {

  const isLogged = localStorage.getItem("token") ? true : false;

  return (
    <nav>
      <div className="nav__container">
        <ul className="nav__links">
          {
            links.map(({name, path, isPrivate}, index) =>{
                return (
                  <li key={index} className="links">
                    {isPrivate && isLogged || !isPrivate ? 
                      <NavLink to={path} className={({isActive}) => isActive ? "active-nav" : ""}>
                        {name}
                      </NavLink> : null
                    }
                  </li>
                )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar