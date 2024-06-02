import React, { useState } from 'react';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import { projects } from '../data';
import { Project } from '../types';

const Dashboard: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleSelectProject = (project: Project) => {
        setSelectedProject(project);
    };

    return (
        <div className="flex w-full h-screen">
            <div className="sidebar w-1/4 bg-blue-700 text-white p-4 overflow-auto">
                <ProjectList projects={projects} onSelect={handleSelectProject} />
            </div>
            <div className="content flex-1 bg-gray-100 p-4 overflow-auto">
                {selectedProject ? (
                    <ProjectDetails project={selectedProject} />
                ) : (
                    <p className="text-center text-gray-500">Please select a project</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
