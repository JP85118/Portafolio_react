import { NavLink } from "react-router-dom"
import {links} from '../data'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav__container">
        <ul className="nav__links">
          {
            links.map(({name, path}, index) =>{
              return (
                <li key={index} className="links">
                  <NavLink to={path} className={({isActive}) => isActive ? "active-nav" : ""}>
                    {name}
                  </NavLink>
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