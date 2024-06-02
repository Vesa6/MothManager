import React from 'react';
import { Project } from '../types';

interface ProjectListProps {
    projects: Project[];
    onSelect: (project: Project) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onSelect }) => {
    return (
        <div className="space-y-3">
            {projects.map(project => (
                <div key={project.id} onClick={() => onSelect(project)}
                     className="bg-blue-600 hover:bg-blue-500 cursor-pointer p-3 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p>Days left: {project.daysLeft}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
