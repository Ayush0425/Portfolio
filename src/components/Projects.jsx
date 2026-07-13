import '../styles/Projects.css';
import { Github, ExternalLink } from 'lucide-react';
import { playClick } from '../utils/sound';

const Projects = () => {
    const projects = [
        {
            title: "ExpenseOS",
            description: "Developed a full-stack expense management application using Node.js, Express.js, and MongoDB. Implemented secure user authentication, expense tracking, and CRUD operations. Designed responsive dashboards using Tailwind CSS with real-time expense visualization and category-based organization.",
            tags: ["Node.js", "Express.js", "MongoDB", "React"],
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            github: "https://github.com/Ayush0425/ExpenseOs",
            demo: "https://expense-os-wheat.vercel.app/",
            meta: "Full Stack"
        },
        {
            title: "Portfolio Website",
            description: "Designed and developed a responsive portfolio website using HTML, CSS, JavaScript, and Tailwind CSS. Implemented reusable UI components, optimized layouts, and applied responsive design principles to ensure cross-device compatibility.",
            tags: ["HTML", "CSS", "JavaScript", "React"],
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            github: "https://github.com/Ayush0425/Portfolio",
            demo: "https://github.com/Ayush0425/Portfolio",
            meta: "Frontend"
        },
        {
            title: "Netflix UI Clone",
            description: "Developed a responsive clone of the Netflix landing page using HTML, CSS, and JavaScript. Executed reusable UI components and modern layouts to replicate the original interface. Applied responsive design techniques to ensure cross-device compatibility.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "https://images.unsplash.com/photo-1574375927938-d5a98e8edd86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            github: "https://github.com/Ayush0425/web-dev-netflix-project",
            demo: "https://web-dev-netflix-project.vercel.app/",
            meta: "Frontend"
        },
    ];

    return (
        <section id="projects" className="projects-section border-dashed-b">
            <div className="projects-header">
                <h2>Projects</h2>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card border-dashed-all hover-bg">
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-image-overlay">
                                <span className="project-meta-tag">{project.meta}</span>
                            </div>
                        </div>

                        <div className="project-info">
                            <div className="project-card-header">
                                <h3>{project.title}</h3>
                                <div className="project-card-links">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="project-icon-link active-scale" 
                                        aria-label="View Code"
                                        onClick={playClick}
                                    >
                                        <Github size={16} />
                                    </a>
                                    {project.demo !== "#" && (
                                        <a 
                                            href={project.demo} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="project-icon-link active-scale" 
                                            aria-label="Live Demo"
                                            onClick={playClick}
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-tags">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="project-tag-badge">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
