import { useState } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { isSoundEnabled, toggleSound, playClick } from '../utils/sound';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [soundOn, setSoundOn] = useState(isSoundEnabled());

    const toggleMenu = () => {
        playClick();
        setIsOpen(!isOpen);
    };

    const handleToggleSound = () => {
        const nextState = toggleSound();
        setSoundOn(nextState);
        if (nextState) {
            playClick(); // play click as immediate feedback on unmute
        }
    };

    const handleLinkClick = () => {
        playClick();
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="navbar">
            <div className="portfolio-layout nav-container">
                <a href="#home" className="logo" onClick={handleLinkClick}>Ayush.</a>

                <div className="desktop-nav">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={handleLinkClick}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-actions">
                        <button 
                            onClick={handleToggleSound} 
                            className="sound-toggle" 
                            aria-label="Toggle sound"
                            style={{
                                padding: '0.5rem',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'background-color var(--transition-speed)',
                                color: 'var(--text-color)',
                                cursor: 'pointer'
                            }}
                        >
                            {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
                        </button>
                        <ThemeToggle />
                    </div>
                </div>

                <div className="mobile-nav-toggle">
                    <button 
                        onClick={handleToggleSound} 
                        className="sound-toggle" 
                        aria-label="Toggle sound"
                        style={{
                            padding: '0.5rem',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-color)',
                            cursor: 'pointer'
                        }}
                    >
                        {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
                    </button>
                    <ThemeToggle />
                    <button onClick={toggleMenu} aria-label="Toggle menu" className="menu-btn">
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="mobile-nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={handleLinkClick}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
