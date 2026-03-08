function ProjectCard({ title, description,projectDate ,projectUrl }) {
    return (
        <div className="project-card">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-date">{projectDate}</p>
        <a href={projectUrl} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
    }

export default ProjectCard;
