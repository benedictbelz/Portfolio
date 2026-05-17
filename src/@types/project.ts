import * as React from 'react';

export type Project = {
    component: React.ComponentType<{}>;
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
    url: string;
};

export type Selection = 'All' | 'Digital' | 'Film' | 'Art';
