import { create } from 'zustand';
import type { Project } from '../@types/project';
import { Page } from '../@types/page';

type Store = {
    device: 'Desktop' | 'Mobile';
    direction: 'Up' | 'Down' | 'None';
    height: number;
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
    // DEFINE VARIABLES
    let device: Store['device'];
    let direction: Store['direction'];
    let height: Store['height'];
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
    // INITIALIZE PAGE
    page = 'Welcome';
    // INITIALIZE PROJECT
    project = null;
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
    // INITIALIZE WELCOME
    welcome = true;
    // RETURN VARIABLES
    return { device, direction, height, page, project, scroll, transition, type, welcome, width };
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

export const Browser = create<Store>(set => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return {
        ...initializeStore(),
        setPage: (page: Page) => set({ page }),
        setProject: (project: Project) => set({ project, page: 'Projects' })
    }
});
