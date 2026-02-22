
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
                <li>
                    <Link to="/members">members</Link>
                </li>
                <li>
                    <Link to="/subscriptions">Subscriptions</Link>
                </li>
                <li>
                    <Link to="/chiffreAffaire">Chiffre D'Affaire</Link>
                </li>
                <li>
                    <Link to="/payments">Payments</Link>
                </li>
                <li>
                    <Link to="/reports">Reports</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
            <div className="burger">
                <button className="burger">☰</button>
            </div>
        </nav>
    </div>
  )
}
export default Navbar

