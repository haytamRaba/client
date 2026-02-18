import React from 'react'
import './Navbar.css'
export const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <h1 className="logo">Salle La Liberte</h1>
            <ul className="nav-links">
                <li><a href='#home'>Home</a></li>
                <li><a href='#clients'>Clients</a></li>
                <li><a href="#chiffre-d-affaire">Chiffre D'Affaire</a></li>
            </ul>
            <div className="burger">
                <button class="burger">☰</button>
            </div>
        </nav>
    </div>
  )
}
export default Navbar