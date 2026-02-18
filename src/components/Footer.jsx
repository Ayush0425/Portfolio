import '../styles/Footer.css';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <a href="#home" className="footer-logo">Ayush Raj</a>
                    <ul className="footer-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Ayush Raj. All rights reserved.</p>
                    <p className="footer-credit">
                        Made with <Heart size={16} fill="currentColor" color="var(--primary-color)" style={{ margin: '0 4px' }} /> and darker coffee.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
