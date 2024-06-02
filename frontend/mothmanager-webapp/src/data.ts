import { Project } from './types';

export const projects: Project[] = [
    {
        id: 1,
        name: 'Project X',
        daysLeft: 7,
        contacts: [
            { name: 'Testi Tyyppi', role: 'UX/UI Designer' },
            { name: 'Mikko Mallikas', role: 'Software Engineer' },
        ],
        externalLinks: [
            { name: 'Figma', url: 'https://figma.com' },
            { name: 'Trello', url: 'https://trello.com' },
        ],
    },
    {
        id: 2,
        name: 'Project Y',
        daysLeft: 14,
        contacts: [
            { name: 'Taneli Devaaja', role: 'Software Engineer' },
            { name: 'Vesa Lehtinen', role: 'Software Engineer' },
        ],
        externalLinks: [
            { name: 'GitHub', url: 'https://github.com' },
            { name: 'Jira', url: 'https://jira.com' },
        ],
    },
];
