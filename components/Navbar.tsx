import React from 'react'
import styles from '../components/Navbar.module.scss';



const Navbar = () => {
  return (
    <div className={styles.mainNavbar}>
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="about">About</a></li>
        </ul>
    </div>
  )
}

export default Navbar