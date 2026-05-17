import { Project } from '../@types/project';

export function getProjects(): Project[] {
    return [
        {
            icon: 'black',
            image: 'assets/projects/phobius/preview.jpg',
            title: 'Phobius',
            type: 'Film'
        },
        {
            icon: 'white',
            image: 'assets/projects/admiralCloud/preview.jpg',
            title: 'AdmiralCloud',
            type: 'Digital'
        },
        {
            icon: 'white',
            image: 'assets/projects/acSync/preview.jpg',
            title: 'AC Sync',
            type: 'Digital'
        },
        {
            icon: 'black',
            image: 'assets/projects/zdfAspekte/preview.jpg',
            title: 'ZDF Aspekte',
            type: 'Film'
        },
        {
            icon: 'white',
            image: 'assets/projects/showreel/preview.jpg',
            links: {
                vimeo: 'https://vimeo.com/147328634'
            },
            title: 'Showreel',
            type: 'Film'
        },
        {
            icon: 'black',
            image: 'assets/projects/personalWebsite/preview.jpg',
            links: {
                github: 'https://github.com/benedictbelz/Website'
            },
            title: 'Personal Website',
            type: 'Digital'
        },
        {
            icon: 'white',
            image: 'assets/projects/nanotec/preview.jpg',
            links: {
                vimeo: 'https://vimeo.com/201318244',
                youtube: 'https://youtu.be/v7zIZeE5dbo',
                www: 'https://en.nanotec.com/knowledge-base/how-a-stepper-motor-works'
            },
            title: 'Nanotec',
            type: 'Film'
        },
        {
            icon: 'white',
            image: 'assets/projects/droemerKnaur/preview.jpg',
            links: {
                vimeo: 'https://vimeo.com/161849901'
            },
            title: 'Droemer Knaur',
            type: 'Film'
        }
        // {
        //     title: 'Shimmering Nightmare',
        //     type: 'Art',
        //     image: 'assets/projects/shimmeringNightmare/preview.jpg',
        //     icon: 'black'
        // },
    ];
}
