import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Bruno <span>Nelli</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
        </li>        
        <li>
          <NavLink to="/career" className={({isActive}) => (isActive ? styles.active : '')}>Carreira Profissional</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar