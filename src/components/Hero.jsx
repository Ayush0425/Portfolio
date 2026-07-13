import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, MapPin, Twitter } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';
import { playClick } from '../utils/sound';
import '../styles/Hero.css';

const Hero = () => {
    const roles = ["Software Developer.", "Web Designer.", "Problem Solver."];
    const [currentRole, setCurrentRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const activeRole = roles[roleIndex];
        let typingSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === activeRole.length) {
            typingSpeed = 2000; // Hold full word
            setIsDeleting(true);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            typingSpeed = 500; // Pause before typing next word
        }

        const timeout = setTimeout(() => {
            setCurrentRole(
                isDeleting
                    ? activeRole.substring(0, charIndex - 1)
                    : activeRole.substring(0, charIndex + 1)
            );
            setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section id="home" className="hero-section border-dashed-b">
            {/* Main top banner space */}
            <div className="hero-banner">
                <img src="/banner.png" alt="Developer Banner" className="banner-image" />
            </div>

            {/* Profile Detail Row */}
            <div className="profile-row">
                <div className="profile-avatar-frame">
                    <img src={profileImg} alt="Ayush Raj" className="profile-avatar" />
                </div>

                <div className="profile-info-block">
                    <p className="mono-text location-tag">
                        <MapPin size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> Jaipur, RJ, IND
                    </p>
                    <h1 className="hero-name">Ayush Raj</h1>
                    <div className="role-typing-wrapper">
                        <span className="role-typing-text">{currentRole}</span>
                        <span className="cursor-tick">|</span>
                    </div>
                </div>
            </div>

            {/* Description & Action CTA Links */}
            <div className="hero-details">
                <p className="hero-intro">
                    I'm a software developer passionate about crafting digital products where design meets clean, scalable code. 
                    I write in React, Python, C++, and play with UI details.
                </p>

                <div className="hero-actions-container">
                    <a 
                        href="#projects" 
                        className="btn-accent border-dashed-all active-scale"
                        onClick={playClick}
                    >
                        View My Work
                    </a>
                    
                    <a 
                        href="/resume.pdf" 
                        className="btn-normal border-dashed-all active-scale" 
                        download
                        onClick={playClick}
                    >
                        Resume <Download size={14} style={{ marginLeft: '4px' }} />
                    </a>
                    
                    <div className="hero-social-strip">
                        <a 
                            href="https://github.com/Ayush0425" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub"
                            className="social-icon-btn active-scale"
                            onClick={playClick}
                        >
                            <Github size={18} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/ayush-raj-9651262a9/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn"
                            className="social-icon-btn active-scale"
                            onClick={playClick}
                        >
                            <Linkedin size={18} />
                        </a>
                        <a 
                            href="https://x.com/AyushRaj0425" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="X"
                            className="social-icon-btn active-scale"
                            onClick={playClick}
                        >
                            <Twitter size={18} />
                        </a>
                        <a 
                            href="mailto:ayushdewal2005@gmail.com" 
                            aria-label="Email"
                            className="social-icon-btn active-scale"
                            onClick={playClick}
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
