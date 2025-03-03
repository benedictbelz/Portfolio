import { Page } from './page';

export type Browser = {
    device: 'Desktop' | 'Mobile';
    direction: 'Up' | 'Down' | 'None';
    height: number;
    page: Page;
    scroll: number;
    type: 'Chrome' | 'Firefox' | 'Microsoft' | 'Opera' | 'Safari' | 'Unknown';
    width: number;
};
