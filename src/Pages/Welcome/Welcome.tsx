import * as React from 'react';
import { Loader } from '../../Components/Loader/Loader';
import { Logo } from './Logo/Logo';
import { Browser } from '../../@types/browser';
import './Welcome.scss';

interface Props {
    handleEnter: Function;
    browser: Browser;
}

interface States {
    loading: boolean;
    rendering: boolean;
    percentage: number;
}

export class Welcome extends React.Component<Props, States> {
    state: States = {
        loading: true,
        rendering: false,
        percentage: 0
    };

    componentDidMount() {
        this.loadMedia();
    }

    private async loadMedia() {
        let images = document.images;
        const loadImages = async () =>
            await new Promise<void>(resolve => {
                if (images.length === 0) {
                    resolve();
                }
                let index = 0;
                const load = () => {
                    const getNextImage = () => {
                        index++;
                        if (index !== images.length) {
                            this.setState({ percentage: Math.floor((index / images.length) * 100) });
                            setTimeout(load, 5);
                        } else if (this.props.browser.device === 'Desktop' && !this.state.rendering) {
                            const interval = setInterval(() => {
                                if (!this.state.rendering) {
                                    clearInterval(interval);
                                    this.setState({ loading: false, percentage: 100 });
                                }
                            }, 50);
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
            <div id='welcome' className={!this.state.loading ? 'show' : ''}>
                <Loader color='white' loading={this.state.loading} percentage={this.state.percentage} />
                <div id='logo'>
                    {this.props.browser.device === 'Desktop' ? (
                        <Logo handleRender={() => this.setState({ rendering: true })} loading={this.state.loading} />
                    ) : (
                        !this.state.loading && <img src='assets/interface/logo.gif' draggable='false' />
                    )}
                </div>
                <div id='message'>
                    Welcome to my website.
                    <br />
                    Click to view some of
                    <br />
                    my creative work.
                </div>
                <div id='enter' onClick={() => this.props.handleEnter()}>
                    <img src='assets/interface/arrowDown.png' draggable='false' />
                </div>
            </div>
        );
    }
}
