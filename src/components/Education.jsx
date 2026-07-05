import '../styles/Timeline.css';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="timeline-section">
            <div className="container">
                <h2 className="section-title">Education & Achievements</h2>

                <div className="timeline-container">
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <GraduationCap size={20} />
                        </div>
                        <div className="timeline-content">
                            <span className="timeline-date">2024 - 2027</span>
                            <h3>Bachelor of Computer Applications (BCA)</h3>
                            <h4>JECRC University &bull; CGPA: 7.1</h4>
                            <p>
                                Pursuing a degree focused on software development fundamentals, database systems, and web technologies. Active participant in college tech activities.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <GraduationCap size={20} />
                        </div>
                        <div className="timeline-content">
                            <span className="timeline-date">2024</span>
                            <h3>Class 12th (CBSE)</h3>
                            <h4>Krishna Public School &bull; Score: 71%</h4>
                            <p>
                                Completed Senior Secondary education with focus on core science and technical subjects.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <GraduationCap size={20} />
                        </div>
                        <div className="timeline-content">
                            <span className="timeline-date">2022</span>
                            <h3>Class 10th (CBSE)</h3>
                            <h4>D.A.V. Public School &bull; Score: 84.6%</h4>
                            <p>
                                Completed secondary education with high marks.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <Briefcase size={20} />
                        </div>
                        <div className="timeline-content">
                            <span className="timeline-date">Problem Solving</span>
                            <h3>Data Structures & Algorithms</h3>
                            <h4>LeetCode & Platforms</h4>
                            <p>
                                Solved 50+ DSA problems on LeetCode. Strong understanding of Arrays, Strings, Hashing, Binary Search, Two Pointers, and C++ STL.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <Award size={20} />
                        </div>
                        <div className="timeline-content">
                            <span className="timeline-date">Certifications</span>
                            <h3>Professional Certifications</h3>
                            <h4>IBM / Coursera</h4>
                            <p style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <span>&bull; Python for Data Science, AI & Development — IBM (Coursera)</span>
                                <span>&bull; Databases and SQL for Data Science with Python — IBM (Coursera)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
