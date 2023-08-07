import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/portfolio" className={styles.brand}>
        Bruno <span>Nelli</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/portfolio" className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio/about" className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar