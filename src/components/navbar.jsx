import React from "react"
import logo from "../assets/images/logo.png"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import styles from '../assets/styles/navbar.module.css'
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <img src={logo} alt="Local dev logo" />
          <button type="button" className={styles.toggle_btn} onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className={styles.nav_links}>
          {pageLinks.map(link => {
            return (
              <a href={link.url} key={link.id} >
                {link.text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar