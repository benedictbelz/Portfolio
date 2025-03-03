export type Project = {
    icon: 'black' | 'white';
    image: string;
    links?: {
        github?: string;
        vimeo?: string;
        youtube?: string;
        www?: string;
    };
    title: string;
    type: Selection;
};

export type Selection = 'All' | 'Digital' | 'Film' | 'Art';
