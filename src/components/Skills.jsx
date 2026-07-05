import '../styles/Skills.css';
import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: "Languages & Frameworks",
            items: [
                { name: "C++", level: "Experienced" },
                { name: "Python", level: "Intermediate" },
                { name: "JavaScript", level: "Intermediate" },
                { name: "HTML & CSS", level: "Experienced" },
                { name: "Node.js & Express.js", level: "Intermediate" },
                { name: "Tailwind CSS", level: "Experienced" },
            ]
        },
        {
            category: "Databases & Tools",
            items: [
                { name: "MySQL & MongoDB", level: "Intermediate" },
                { name: "Supabase", level: "Beginner" },
                { name: "Git & GitHub", level: "Intermediate" },
                { name: "VS Code", level: "Experienced" },
                { name: "Vercel & Render", level: "Intermediate" },
                { name: "MongoDB Compass", level: "Intermediate" },
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
