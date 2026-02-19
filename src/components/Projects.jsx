import '../styles/Projects.css';
import { Github, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
    const projects = [
        {
            title: "Personal Portfolio",
            description: "A modern, responsive personal portfolio website built with React and Vite.",
            tags: ["React", "Vite", "CSS"],
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            github: "https://github.com/Ayush0425/Portfolio",
            demo: "#"
        },
        {
            title: "Netflix Clone",
            description: "A responsive frontend web application replicating the Netflix UI. diverse movie categories, and hover effects.",
            tags: ["HTML", "CSS"],
            image: "/projects/netflix-bg.jpg",
            github: "https://github.com/Ayush0425/web-dev-netflix-project",
            demo: "https://netflix-clone-demo.com"
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
