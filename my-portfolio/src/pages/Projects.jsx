
import projectStyles from '../modules/projects.module.css';
import { Grid } from '@mui/material'; 
import ProjectCard from "../components/ProjectCard";
function Projects() {
    return (
        <div className={projectStyles.projects}>
            <h1>My Projects</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <ProjectCard 
                        title="Inventory Defect Monitoring System" 
                        description="An AI-powered computer vision app that automates inventory defect detection using Python, YOLO, and OpenCV. Built a microservices backend on Azure with a RESTful API serving real-time results to a React dashboard. Reduced manual inspection time by 70% with 94% detection accuracy." 
                        projectDate="January 1, 2023" 
                        projectUrl="https://github.com/SalmaanShire365?tab=repositories"></ProjectCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProjectCard 
                        title="Healthcare Claims Processing API" 
                        description="A high-throughput microservices platform built with Java, Spring Boot, Kafka, and Redis, processing 10K+ transactions per day at sub-50ms p95 latency. Includes 90%+ test coverage and a full CI/CD pipeline with Docker containerization."  
                        projectDate="January 1, 2023"
                        projectUrl="https://github.com/SalmaanShire365?tab=repositories"></ProjectCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProjectCard 
                        title="KindHearts Therapy Management Platform" 
                        description="
A full stack therapy management app serving 50+ therapists and 200+ clients. Built with React and Spring Boot, featuring session tracking, digital signatures, PDF report generation, and role-based access control with JWT authentication." 
            
                        projectDate="January 1, 2023"
                        projectUrl="https://github.com/SalmaanShire365?tab=repositories"></ProjectCard>
                </Grid>
            </Grid>
        </div> 
    );
}

export default Projects;