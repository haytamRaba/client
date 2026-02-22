
import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
export const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <h1 className="logo">Salle La Liberte</h1>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="/members">members</Link></li>
                <li><Link to="/chiffreAffaire">Chiffre D'Affaire</Link></li>
            </ul>
            <div className="burger">
                <button className="burger">☰</button>
            </div>
        </nav>
    </div>
  )
}
export default Navbar

