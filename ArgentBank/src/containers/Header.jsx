import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className="header">
            <nav className="main__nav">
                <NavLink to="/" className="main__logo">
                    <img src="/assets/argentBankLogo.png" alt="Argent Bank Logo" className="main__logo-image" />
                    <h1 className="sr__only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink to="/login" className="main__menu-item">
                        <FontAwesomeIcon icon={faUserCircle} />
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;