import '../styles/About.css';
import { User, Code, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <ScrollReveal>
                    <h2 className="section-title">About Me</h2>
                </ScrollReveal>

                <div className="about-content">
                    <ScrollReveal className="about-cards-wrapper">
                        <div className="about-cards">
                            <div className="about-card">
                                <User className="card-icon" />
                                <h3>Role</h3>
                                <p>Fresher | Aspiring Software Developer</p>
                            </div>

                            <div className="about-card">
                                <Code className="card-icon" />
                                <h3>Skills</h3>
                                <p>React, Python, C++, Data Structures</p>
                            </div>

                            <div className="about-card">
                                <BookOpen className="card-icon" />
                                <h3>Education</h3>
                                <p>BCA, JECRC University</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p className="about-text">
                            I am a dedicated and enthusiastic <strong>Software Developer</strong> with a strong foundation in Computer Applications.
                            My journey in tech has been driven by curiosity and a desire to build impactful solutions.
                            I recently completed my <strong>BCA from JECRC University</strong> and have hands-on experience building web applications using <strong>React</strong> and <strong>JavaScript</strong>.
                        </p>

                        <p className="about-text">
                            I am currently exploring <strong>Data Structures & Algorithms</strong> to strengthen my problem-solving skills.
                            I enjoy creating modern, responsive websites and am always eager to learn new technologies.
                            When I'm not coding, you can find me exploring video editing or gaming.
                        </p>

                        <a href="#contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Let's Talk</a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
