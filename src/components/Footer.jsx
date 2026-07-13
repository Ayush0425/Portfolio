import '../styles/Footer.css';
import { Heart } from 'lucide-react';
import { playClick } from '../utils/sound';

const Footer = () => {
    return (
        <footer className="footer border-dashed-t">
            <div className="portfolio-layout footer-container">
                <div className="footer-top">
                    <a href="#home" className="footer-logo" onClick={playClick}>Ayush.</a>
                    <ul className="footer-links">
                        <li><a href="#about" onClick={playClick}>About</a></li>
                        <li><a href="#skills" onClick={playClick}>Skills</a></li>
                        <li><a href="#projects" onClick={playClick}>Projects</a></li>
                        <li><a href="#contact" onClick={playClick}>Contact</a></li>
                    </ul>
                </div>

                <div className="footer-bottom border-dashed-t">
                    <p>© {new Date().getFullYear()} Ayush Raj. All rights reserved.</p>
                    <p className="footer-credit">
                        Made with <Heart size={14} fill="currentColor" color="var(--text-color)" style={{ margin: '0 4px' }} /> and code.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
