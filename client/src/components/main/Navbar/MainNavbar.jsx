import React from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss'; // Import the SCSS module

export default function MainNavbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);

    const navigateToLoginPage = () => {
        navigate('/login');
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-container']}>
                {/* Brand */}
                <div className={styles['navbar-brand']}>
                    Spring CRM
                </div>

                {/* Desktop Links */}
                <div className={styles['navbar-links']}>
                    <a href="#features">Features</a>
                    <a href="#solutions">Solutions</a>
                    <a href="#testimonials">Testimonials</a>
                    <button
                        className={`secondary ${styles['secondary']}`}
                        onClick={navigateToLoginPage}
                    >
                        Login
                    </button>
                    <button className={`primary ${styles['primary']}`}>
                        Let's talk
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className={styles['navbar-menu-icon']}>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={styles['navbar-mobile-menu']}>
                    <a href="#features">Features</a>
                    <a href="#solutions">Solutions</a>
                    <a href="#testimonials">Testimonials</a>
                    <button onClick={navigateToLoginPage}>Get Started</button>
                </div>
            )}
        </nav>
    );
}
