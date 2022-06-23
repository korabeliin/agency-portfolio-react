import React from 'react';

import styles from './Header.module.scss'
import Logo from '../../images/Logo.png'

const Header = () => {
    return (
        <header className={styles.portfolioHeader} >
            <nav>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo"/>
                    <span>Agency</span>
                </div>
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <button>Contact</button>
            </nav>

            <main className={styles.mainContainer}>
                <div className={styles.description}>
                    <h1>Portfolio</h1>
                    <p>Agency provides a full service range including technical skills, design,business understanding.</p>
                </div>
            </main>
        </header>
    );
};

export default Header;