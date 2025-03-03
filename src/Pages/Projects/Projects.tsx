import * as React from 'react';
import { Loader } from '../../Components/Loader/Loader';
import { Scrollbar } from '../../Components/Scrollbar/Scrollbar';
import { AcSync } from './Content/AcSync';
import { AdmiralCloud } from './Content/AdmiralCloud';
import { ArtAttech } from './Content/ArtAttech';
import { DroemerKnaur } from './Content/DroemerKnaur';
import { Etre } from './Content/Etre';
import { KeepGoing } from './Content/KeepGoing';
import { Lockdown } from './Content/Lockdown';
import { Metropolis } from './Content/Metropolis';
import { MMPro } from './Content/MMPro';
import { Nanotec } from './Content/Nanotec';
import { Phobius } from './Content/Phobius';
import { PersonalWebsite } from './Content/PersonalWebsite';
import { ShimmeringNightmare } from './Content/ShimmeringNightmare';
import { Showreel } from './Content/Showreel';
import { ZdfAspekte } from './Content/ZdfAspekte';
import { Browser } from '../../@types/browser';
import { Project } from '../../@types/project';
import './Projects.scss';

interface Props {
    browser: Browser;
    project: Project | null;
}

interface States {
    loading: boolean;
    percentage: number;
    loadedProjects: string[];
}

export class Projects extends React.Component<Props, States> {
    state: States = {
        loading: true,
        percentage: 0,
        loadedProjects: []
    };

    componentDidUpdate(prevProps: any) {
        if (
            this.props.project &&
            ((this.props.project && !prevProps.project) || this.props.project.title !== prevProps.project.title) &&
            !this.state.loadedProjects.includes(this.props.project.title)
        ) {
            setTimeout(() => {
                this.setState({ loading: true, loadedProjects: [this.props.project.title, ...this.state.loadedProjects] });
                this.loadMedia();
            });
        }
    }

    private async loadMedia() {
        let images = document.querySelectorAll('#projects img') as unknown as HTMLImageElement[];
        const loadImages = async () =>
            await new Promise<void>(resolve => {
                if (images.length === 0) {
                    resolve();
                }
                let index = 0;
                const load = () => {
                    const getNextImage = () => {
                        index++;
                        this.setState({ percentage: Math.floor((index / images.length) * 100) });
                        if (index !== images.length) {
                            setTimeout(load, 5);
                        } else {
                            resolve();
                        }
                    };
                    const image = new Image();
                    image.src = images[index].src;
                    image.onload = () => getNextImage();
                    image.onerror = () => getNextImage();
                };
                load();
            });
        await loadImages();
        this.setState({ loading: false, percentage: 100 });
    }

    render() {
        return (
            <Scrollbar browser={this.props.browser} color='white' id='projects'>
                <Loader color='black' loading={this.state.loading} percentage={this.state.percentage} />
                {this.props.project && this.props.project.title === 'AC Sync' && <AcSync />}
                {this.props.project && this.props.project.title === 'AdmiralCloud' && <AdmiralCloud browser={this.props.browser} />}
                {this.props.project && this.props.project.title === 'Art Attech' && <ArtAttech browser={this.props.browser} />}
                {this.props.project && this.props.project.title === 'Droemer Knaur' && <DroemerKnaur browser={this.props.browser} />}
                {this.props.project && this.props.project.title === 'Être' && <Etre browser={this.props.browser} />}
                {this.props.project && this.props.project.title === 'Keep Going' && <KeepGoing />}
                {this.props.project && this.props.project.title === 'Lockdown' && <Lockdown browser={this.props.browser} />}
                {this.props.project && this.props.project.title === 'Metropolis' && <Metropolis browser={this.props.browser} />}
                {this.props.project && this.props.project.title === 'MMPro' && <MMPro />}
                {this.props.project && this.props.project.title === 'Nanotec' && <Nanotec browser={this.props.browser} />}
                {this.props.project && this.props.project.title === 'Personal Website' && <PersonalWebsite />}
                {this.props.project && this.props.project.title === 'Phobius' && <Phobius browser={this.props.browser} />}
                {this.props.project && this.props.project.title === 'Shimmering Nightmare' && <ShimmeringNightmare browser={this.props.browser} />}
                {this.props.project && this.props.project.title === 'Showreel' && <Showreel browser={this.props.browser} />}
                {this.props.project && this.props.project.title === 'ZDF Aspekte' && <ZdfAspekte browser={this.props.browser} />}
            </Scrollbar>
        );
    }
}
