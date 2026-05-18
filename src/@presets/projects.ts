import { AcSync } from '../pages/projects/project/acsync';
import { AdmiralCloud } from '../pages/projects/project/admiralcloud';
import { DroemerKnaur } from '../pages/projects/project/droemerknaur';
import { Nanotec } from '../pages/projects/project/nanotec';
import { Phobius } from '../pages/projects/project/phobius';
import { ShimmeringNightmare } from '../pages/projects/project/shimmeringnightmare';
import { Showreel } from '../pages/projects/project/showreel';
import { Website } from '../pages/projects/project/website';
import { ZdfAspekte } from '../pages/projects/project/zdfaspekte';
import { Project } from '../@types/project';

export function getProjects(): Project[] {
    return [
        {
            component: Phobius,
            icon: 'black',
            image: 'assets/projects/phobius/preview.jpg',
            title: 'Phobius',
            type: 'Film',
            url: 'phobius'
        },
        {
            component: AdmiralCloud,
            icon: 'white',
            image: 'assets/projects/admiralcloud/preview.jpg',
            title: 'AdmiralCloud',
            type: 'Digital',
            url: 'admiralcloud'
        },
        {
            component: AcSync,
            icon: 'white',
            image: 'assets/projects/acsync/preview.jpg',
            title: 'AC Sync',
            type: 'Digital',
            url: 'acsync'
        },
        {
            component: ZdfAspekte,
            icon: 'black',
            image: 'assets/projects/zdfaspekte/preview.jpg',
            title: 'ZDF Aspekte',
            type: 'Film',
            url: 'zdfaspekte'
        },
        {
            component: Showreel,
            icon: 'white',
            image: 'assets/projects/showreel/preview.jpg',
            links: {
                vimeo: 'https://vimeo.com/147328634'
            },
            title: 'Showreel',
            type: 'Film',
            url: 'showreel'
        },
        {
            component: Website,
            icon: 'black',
            image: 'assets/projects/website/preview.jpg',
            links: {
                github: 'https://github.com/benedictbelz/Portfolio'
            },
            title: 'Personal Website',
            type: 'Digital',
            url: 'website'
        },
        {
            component: Nanotec,
            icon: 'white',
            image: 'assets/projects/nanotec/preview.jpg',
            links: {
                vimeo: 'https://vimeo.com/201318244',
                youtube: 'https://youtu.be/v7zIZeE5dbo',
                www: 'https://en.nanotec.com/knowledge-base/how-a-stepper-motor-works'
            },
            title: 'Nanotec',
            type: 'Film',
            url: 'nanotec'
        },
        {
            component: DroemerKnaur,
            icon: 'white',
            image: 'assets/projects/droemerknaur/preview.jpg',
            links: {
                vimeo: 'https://vimeo.com/161849901'
            },
            title: 'Droemer Knaur',
            type: 'Film',
            url: 'droemerknaur'
        },
        {
            component: ShimmeringNightmare,
            title: 'Shimmering Nightmare',
            type: 'Art',
            image: 'assets/projects/shimmeringnightmare/preview.jpg',
            icon: 'black',
            url: 'shimmeringnightmare'
        }
    ];
}
