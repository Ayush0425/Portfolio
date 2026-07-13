import '../styles/Timeline.css';
import { GraduationCap, Award, BrainCircuit } from 'lucide-react';
import { playClick } from '../utils/sound';

const Education = () => {
    const timelineData = [
        {
            type: "education",
            icon: <GraduationCap size={16} />,
            date: "2024 - 2027",
            title: "Bachelor of Computer Applications (BCA)",
            subtitle: "JECRC University • CGPA: 7.29",
            description: "Focusing on software development fundamentals, database management systems, and modern web architectures. Active participant in university tech meetups."
        },
        {
            type: "education",
            icon: <GraduationCap size={16} />,
            date: "2023",
            title: "Class 12th Senior Secondary",
            subtitle: "Krishna Public School • Score: 71%",
            description: "Completed higher secondary education with a focus on science, mathematics, and technical subjects."
        },
        {
            type: "education",
            icon: <GraduationCap size={16} />,
            date: "2021",
            title: "Class 10th Secondary School",
            subtitle: "D.A.V. Public School • Score: 84.6%",
            description: "Completed foundational secondary schooling with high performance."
        },
        {
            type: "achievement",
            icon: <BrainCircuit size={16} />,
            date: "Problem Solving",
            title: "Data Structures & Algorithms",
            subtitle: "LeetCode & Platforms",
            description: "Solved 100+ DSA problems on LeetCode. Practical understanding of array methods, binary search, two-pointer algorithms, hashing, and C++ STL structures."
        },
        {
            type: "achievement",
            icon: <Award size={16} />,
            date: "Certifications",
            title: "IBM Coursera Certifications",
            subtitle: "Coursera",
            description: "Completed professional courses: 'Python for Data Science, AI & Development', 'Databases and SQL for Data Science with Python', and 'Generative AI: Elevate Your Data Science Career'."
        }
    ];

    return (
        <section id="education" className="timeline-section border-dashed-b">
            <div className="timeline-header">
                <h2>Education & Achievements</h2>
            </div>

            <div className="timeline-container">
                {/* Center / Left line thread */}
                <div className="timeline-thread"></div>

                {timelineData.map((item, index) => (
                    <div key={index} className="timeline-card">
                        <div className="timeline-dot-container">
                            <div className="timeline-node border-dashed-all">
                                {item.icon}
                            </div>
                        </div>

                        <div className="timeline-info border-dashed-all hover-bg">
                            <span className="timeline-date-badge">{item.date}</span>
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
