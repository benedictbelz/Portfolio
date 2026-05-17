import * as React from 'react';
import { Loader } from '../../components/loader/loader';
import { Scrollbar } from '../../components/scrollbar/scrollbar';
import { Browser } from '../../stores/browser';
import './projects.scss';

interface States {
    loading: boolean;
    percentage: number;
    projects: string[];
}

export class Projects extends React.Component<{}, States> {
    private unsubscribe: () => void;

    state: States = {
        loading: false,
        percentage: 0,
        projects: []
    };

    componentDidMount() {
        // DEFINE UNSUBSCRIBE
        this.unsubscribe = Browser.subscribe((state, prevState) => {
            if (
                state.project &&
                state.project !== prevState.project &&
                !this.state.projects.includes(state.project.title)
            ) {
                setTimeout(() => {
                    this.setState({ loading: true, projects: [state.project!.title, ...this.state.projects] });
                    this.handleLoad();
                });
            }
        });
        // DEFINE PROJECT
        const project = Browser.getState().project;
        // IF PROJECT IS DEFINED
        if (project) {
            this.setState({ loading: true, projects: [project.title] }, () => {
                this.setState({ loading: false, percentage: 100 });
            });
        }
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    private async handleLoad() {
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
        // DEFINE VARIABLES
        const browser = Browser.getState();
        const Project = browser.project?.component;
        // RETURN COMPONENT
        return (
            <Scrollbar color='white' id='projects'>
                <Loader color='black' loading={this.state.loading} percentage={this.state.percentage} />
                {Project && <Project />}
            </Scrollbar>
        );
    }
}
