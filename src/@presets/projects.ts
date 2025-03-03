import { Project } from '../@types/project';

export function getProjects(): Project[] {
    return [
        {
            icon: 'Black',
            image: 'assets/projects/phobius/preview.jpg',
            title: 'Phobius',
            type: 'Film'
        },
        {
            icon: 'White',
            image: 'assets/projects/acSync/preview.jpg',
            title: 'AC Sync',
            type: 'Digital'
        },
        {
            icon: 'Black',
            image: 'assets/projects/zdfAspekte/preview.jpg',
            title: 'ZDF Aspekte',
            type: 'Film'
        },
        {
            icon: 'White',
            image: 'assets/projects/showreel/preview.jpg',
            links: {
                vimeo: 'https://vimeo.com/147328634'
            },
            title: 'Showreel',
            type: 'Film'
        },
        {
            icon: 'Black',
            image: 'assets/projects/personalWebsite/preview.jpg',
            links: {
                github: 'https://github.com/benedictbelz/Website'
            },
            title: 'Personal Website',
            type: 'Digital'
        },
        {
            icon: 'White',
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
            icon: 'White',
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
        //     icon: 'Black'
        // },
    ];
}
