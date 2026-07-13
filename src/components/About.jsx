import '../styles/About.css';
import { playClick } from '../utils/sound';

const About = () => {
    return (
        <section id="about" className="about-section border-dashed-b">
            <div className="about-header">
                <h2>About</h2>
            </div>
            
            <div className="about-list-container">
                <div className="about-list-item">
                    <span className="about-bullet">•</span>
                    <p>
                        I'm a dedicated and enthusiastic <strong className="highlight">Software Developer</strong> with a strong foundation in Computer Applications.
                    </p>
                </div>
                
                <div className="about-list-item">
                    <span className="about-bullet">•</span>
                    <p>
                        Currently pursuing my <strong className="highlight">BCA from JECRC University</strong>, I have hands-on experience building modern web applications using <strong className="highlight">React, JavaScript, and Tailwind CSS</strong>.
                    </p>
                </div>

                <div className="about-list-item">
                    <span className="about-bullet">•</span>
                    <p>
                        I enjoy solving complex problems through <strong className="highlight">Data Structures & Algorithms (DSA)</strong>, exploring video editing, and designing interactive user experiences.
                    </p>
                </div>
            </div>

            <div className="about-footer">
                <a 
                    href="#contact" 
                    className="about-cta-btn border-dashed-all active-scale"
                    onClick={playClick}
                >
                    Let's Connect
                </a>
            </div>
        </section>
    );
};

export default About;
