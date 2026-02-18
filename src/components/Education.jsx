import '../styles/Timeline.css';
import { GraduationCap, Briefcase } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="timeline-section">
            <div className="container">
                <h2 className="section-title">Education & Experience</h2>

                <div className="timeline-container">
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <GraduationCap size={20} />
                        </div>
                        <div className="timeline-content">
                            <span className="timeline-date">2021 - 2024</span>
                            <h3>Bachelor of Computer Applications (BCA)</h3>
                            <h4>JECRC University</h4>
                            <p>
                                Graduated with a focus on software development fundamentals, database management, and web technologies.
                                Active participant in coding clubs and technical events.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <GraduationCap size={20} />
                        </div>
                        <div className="timeline-content">
                            <span className="timeline-date">2021</span>
                            <h3>12th Grade (Senior Secondary)</h3>
                            <h4>School Name</h4>
                            <p>Completed higher secondary education with a focus on Mathematics and Computer Science.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <Briefcase size={20} />
                        </div>
                        <div className="timeline-content">
                            <span className="timeline-date">Projects</span>
                            <h3>Personal & Academic Projects</h3>
                            <h4>Self-Learning</h4>
                            <p>
                                Developed various frontend projects including a Netflix Clone and Nike Landing Page.
                                Gained hands-on experience with React, JavaScript, and UI/UX design principles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
