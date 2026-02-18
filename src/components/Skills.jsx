import '../styles/Skills.css';
import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend Development",
            items: [
                { name: "HTML", level: "Experienced" },
                { name: "CSS/Vanilla", level: "Experienced" },
                { name: "JavaScript", level: "Intermediate" },
                { name: "React", level: "Beginner" },
                { name: "UI/UX Design", level: "Intermediate" },
            ]
        },
        {
            category: "Programming & Tools",
            items: [
                { name: "C / C++", level: "Intermediate" },
                { name: "Python", level: "Beginner" },
                { name: "Git & GitHub", level: "Intermediate" },
                { name: "DBMS", level: "Basics" },
                { name: "VS Code", level: "Experienced" },
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">My Skills</h2>

                <div className="skills-container">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skills-category">
                            <h3>{category.category}</h3>
                            <div className="skills-grid">
                                {category.items.map((skill, idx) => (
                                    <div key={idx} className="skill-item">
                                        <CheckCircle2 className="skill-icon" size={16} />
                                        <div className="skill-info">
                                            <h4>{skill.name}</h4>
                                            <span className="skill-level">{skill.level}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
