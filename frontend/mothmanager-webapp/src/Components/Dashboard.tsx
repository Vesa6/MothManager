// src/Dashboard.tsx
import React, { useState } from 'react';
import { Link } from '../Interfaces/Link';

const Dashboard: React.FC = () => {
    const [links, setLinks] = useState<Link[]>([]);
    const [url, setUrl] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleAddLink = () => {
        const newLink: Link = {
            id: links.length + 1, // Simple ID assignment
            url: url,
            description: description
        };
        setLinks([...links, newLink]);
        setUrl(''); // Reset the input field
        setDescription(''); // Reset the input field
    };

    return (
        <div>
            <h1>Project Links Dashboard</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter URL"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button onClick={handleAddLink}>Add Link</button>
            </div>
            <ul>
                {links.map(link => (
                    <li key={link.id}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.description}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
