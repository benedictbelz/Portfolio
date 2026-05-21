import { AdmiralCloud } from '../pages/projects/project/admiralcloud';
import { DroemerKnaur } from '../pages/projects/project/droemerknaur';
import { Ebenrieder } from '../pages/projects/project/ebenrieder';
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
            component: Ebenrieder,
            icon: 'white',
            image: 'assets/projects/ebenrieder/preview.jpg',
            links: {
                www: 'https://www.ebenrieder.de'
            },
            title: 'Ebenrieder',
            type: 'Digital',
            url: 'ebenrieder'
        },
        {
            component: AdmiralCloud,
            icon: 'white',
            image: 'assets/projects/admiralcloud/preview.jpg',
            links: {
                www: 'https://www.admiralcloud.com'
            },
            title: 'AdmiralCloud',
            type: 'Digital',
            url: 'admiralcloud'
        },
        {
            component: Phobius,
            icon: 'black',
            image: 'assets/projects/phobius/preview.jpg',
            links: {
                www: 'https://phobius.at'
            },
            title: 'Phobius',
            type: 'Film',
            url: 'phobius'
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
