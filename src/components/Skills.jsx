import { useState } from 'react';
import { playHover, playClick } from '../utils/sound';
import '../styles/Skills.css';

const Skills = () => {
    const categories = ["All", "Languages", "Frontend", "Backend", "Tools"];
    const [activeFilter, setActiveFilter] = useState("All");

    const skillsData = [
        { name: "C++", type: "Languages" },
        { name: "Python", type: "Languages" },
        { name: "JavaScript", type: "Languages" },
        { name: "HTML & CSS", type: "Frontend" },
        { name: "Tailwind CSS", type: "Frontend" },
        { name: "React", type: "Frontend" },
        { name: "Node.js", type: "Backend" },
        { name: "Express.js", type: "Backend" },
        { name: "MongoDB", type: "Backend" },
        { name: "MySQL", type: "Backend" },
        { name: "Supabase", type: "Backend" },
        { name: "Git & GitHub", type: "Tools" },
        { name: "VS Code", type: "Tools" },
        { name: "Vercel", type: "Tools" },
    ];

    const filteredSkills = activeFilter === "All" 
        ? skillsData 
        : skillsData.filter(s => s.type === activeFilter);

    const handleFilterClick = (cat) => {
        playClick();
        setActiveFilter(cat);
    };

    return (
        <section id="skills" className="skills-section border-dashed-b">
            <div className="skills-header">
                <div className="skills-title-group">
                    <h2>Tech Stack</h2>
                    <span className="play-instruction">
                        <span className="desktop-inst">( hover to play )</span>
                        <span className="mobile-inst">( tap to play )</span>
                    </span>
                </div>
                
                {/* Category filters */}
                <div className="skills-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => handleFilterClick(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="skills-grid-container">
                {filteredSkills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="skill-badge border-dashed-all"
                        onMouseEnter={() => playHover(index)}
                        onClick={() => {
                            playHover(index);
                        }}
                    >
                        <span className="skill-dot"></span>
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
