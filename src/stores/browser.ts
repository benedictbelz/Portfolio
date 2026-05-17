import { create } from 'zustand';
import type { Project } from '../@types/project';
import { Page } from '../@types/page';
import { getProjects } from '../@presets/projects';

type Store = {
    device: 'Desktop' | 'Mobile';
    direction: 'Up' | 'Down' | 'None';
    height: number;
    logo: boolean;
    page: Page;
    project: Project | null;
    scroll: number;
    transition: boolean;
    type: 'Chrome' | 'Firefox' | 'Microsoft' | 'Opera' | 'Safari' | 'Unknown';
    welcome: boolean;
    width: number;
    setPage: (page: Page) => void;
    setProject: (project: Project | null) => void;
};

const initializeStore = (): Omit<Store, 'setPage' | 'setProject'> => {
    // DEFINE PARAMS
    const params = new URLSearchParams(window.location.search);
    // DEFINE VARIABLES
    let device: Store['device'];
    let direction: Store['direction'];
    let height: Store['height'];
    let logo: Store['logo'];
    let page: Store['page'];
    let project: Store['project'];
    let scroll: Store['scroll'];
    let transition: Store['transition'];
    let type: Store['type'];
    let welcome: Store['welcome'];
    let width: Store['width'];
    // INITIALIZE DEVICE
    if ('ontouchstart' in window || 'onmsgesturechange' in window) {
        device = 'Mobile';
    } else {
        device = 'Desktop';
    }
    // INITIALIZE DIRECTION
    direction = 'None';
    // INITIALIZE HEIGHT & WIDTH
    height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // INITIALIZE LOGO
    logo = false;
    // INITIALIZE PAGE & PROJECT
    page = 'Welcome';
    project = null;
    welcome = true;
    switch (params.get('page')) {
        case 'overview':
            page = 'Overview';
            welcome = false;
            break;
        case 'information':
            page = 'Information';
            welcome = false;
            break;
        case 'imprint':
            page = 'Imprint';
            welcome = false;
            break;
        case 'projects':
            page = 'Projects';
            welcome = false;
            if (params.get('project')) project = getProjects().find(project => project.url === params.get('project')) ?? null;
            break;
    }
    // INITIALIZE SCROLL
    scroll = 0;
    // INITIALIZE TRANSITION
    transition = false;
    // INITIALIZE TYPE
    if (navigator.userAgent.indexOf('Chrome') > -1) {
        type = 'Chrome';
    } else if (navigator.userAgent.indexOf('Firefox') > -1) {
        type = 'Firefox';
    } else if (navigator.userAgent.indexOf('MSIE') > -1) {
        type = 'Microsoft';
    } else if (navigator.userAgent.toLowerCase().indexOf('op') > -1) {
        type = 'Opera';
    } else if (navigator.userAgent.indexOf('Safari') > -1) {
        type = 'Safari';
    } else {
        type = 'Unknown';
    }
    // RETURN VARIABLES
    return { device, direction, height, logo, page, project, scroll, transition, type, welcome, width };
}

const handleResize = () => {
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    Browser.setState({ height, width });
}

const handleScroll = () => {
    const scroll = document.documentElement.scrollTop;
    const current = Browser.getState().scroll;
    const direction: Store['direction'] = scroll < current ? 'Up' : 'Down';
    Browser.setState({ direction, scroll });
}

const handleUrl = (page: Page, project: Project | null) => {
    switch (page) {
        case 'Overview':
            history.replaceState(null, '', '?page=overview');
            break;
        case 'Information':
            history.replaceState(null, '', '?page=information');
            break;
        case 'Imprint':
            history.replaceState(null, '', '?page=imprint');
            break;
        case 'Projects':
            history.replaceState(null, '', project ? `?page=projects&project=${project.url}` : '?page=projects');
            break;
        default:
            history.replaceState(null, '', window.location.pathname);
            break;
    }
};

export const Browser = create<Store>(set => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return {
        ...initializeStore(),
        setPage: (page: Page) => {
            handleUrl(page, null);
            set({ page });
        },
        setProject: (project: Project) => {
            handleUrl('Projects', project);
            set({ project, page: 'Projects' });
        }
    }
});
