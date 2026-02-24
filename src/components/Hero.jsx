import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';
import '../styles/Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Aspiring Software / Web Developer";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">Ayush Raj</h1>
                    <h2 className="hero-role">{text}<span className="cursor">|</span></h2>
                    <p className="hero-description">
                        A passionate software developer skilled in React, C++, and Python.
                        I love building modern web applications and exploring new technologies.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="/resume.pdf" className="btn btn-outline" download>
                            Resume <Download size={18} />
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/Ayush0425" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/ayush-raj-9651262a9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:ayushdewal2005@gmail.com" aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="image-blob"></div>
                    <div className="profile-img-container">
                        <img src={profileImg} alt="Ayush Raj" className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
