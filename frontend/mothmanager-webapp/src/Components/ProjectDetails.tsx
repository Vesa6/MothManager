import React from 'react';
import { Project } from '../types';

interface ProjectDetailsProps {
    project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
    return (
        <div className="text-black p-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl text-black font-bold mb-3">{project.name}</h2>
            <div className="mb-4">
                <h3 className="font-semibold">Contacts</h3>
                {project.contacts.map((contact, index) => (
                    <p key={index}>{contact.name} - {contact.role}</p>
                ))}
            </div>
            <div>
                <h3 className="font-semibold">External Links</h3>
                {project.externalLinks.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                       className="block hover:underline">
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProjectDetails;
