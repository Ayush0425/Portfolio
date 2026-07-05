import '../styles/Projects.css';
import { Github, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
    const projects = [
        {
            title: "ExpenseOS",
            description: "Developed a full-stack expense management application using Node.js, Express.js, and MongoDB. Implemented secure user authentication, expense tracking, and CRUD operations. Designed responsive dashboards using Tailwind CSS with real-time expense visualization and category-based organization.",
            tags: ["Node.js", "Express.js", "MongoDB", "Tailwind CSS", "React"],
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            github: "https://github.com/Ayush0425/ExpenseOs",
            demo: "#"
        },
        {
            title: "Portfolio Website",
            description: "Designed and developed a responsive portfolio website using HTML, CSS, JavaScript, and Tailwind CSS. Implemented reusable UI components, optimized layouts, and applied responsive design principles to ensure cross-device compatibility.",
            tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            github: "https://github.com/Ayush0425/Portfolio",
            demo: "https://github.com/Ayush0425/Portfolio"
        },
        {
            title: "Netflix UI Clone",
            description: "Developed a responsive clone of the Netflix landing page using HTML, CSS, and JavaScript. Executed reusable UI components and modern layouts to replicate the original interface. Applied responsive design techniques to ensure cross-device compatibility.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "/projects/netflix-bg.jpg",
            github: "https://github.com/Ayush0425/web-dev-netflix-project",
            demo: "https://web-dev-netflix-project.vercel.app/"
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Featured Projects</h2>
                </ScrollReveal>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="project-card">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View Code">
                                                <Github size={24} />
                                            </a>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                                <ExternalLink size={24} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
