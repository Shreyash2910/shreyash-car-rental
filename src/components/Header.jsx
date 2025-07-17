import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header>
            <nav>
                <div className="container">
                    <h2 className="logo">Shreyash Car Rentals</h2>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        &#9776;
                    </div>
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/top" onClick={closeMenu}>Top Rentals</Link></li>
                        <li><Link to="/luxury" onClick={closeMenu}>Luxury</Link></li>
                        <li><Link to="/affordable" onClick={closeMenu}>Affordable</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
