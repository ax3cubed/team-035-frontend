import React from 'react';
import ProjectLogo from '../img/project-logo.svg';

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img width="120" src={ProjectLogo} alt=""/>
                </a>
            </div>
        </nav>
    </header>
);

export default Header;
