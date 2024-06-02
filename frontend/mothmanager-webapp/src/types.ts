export interface Contact {
    name: string;
    role: string;
}

export interface Project {
    id: number;
    name: string;
    daysLeft: number;
    contacts: Contact[];
    externalLinks: { name: string; url: string }[];
}
