import * as React from 'react';
import { Loader } from '../../Components/Loader/Loader';
import { Logo } from './Logo/Logo';
import { Browser } from '../../@types/browser';
import './Welcome.scss';

interface Props {
    clickEnter: Function;
    browser: Browser;
}

interface States {
    isLoading: boolean;
    isRendered: boolean;
    percentage: number;
}

export class Welcome extends React.Component<Props, States> {
    state: States = {
        isLoading: true,
        isRendered: false,
        percentage: 0
    };

    componentDidMount() {
        this.loadMedia();
    }

    async loadMedia() {
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
                        } else if (this.props.browser.device === 'Desktop' && !this.state.isRendered) {
                            const interval = setInterval(() => {
                                if (!this.state.isRendered) {
                                    clearInterval(interval);
                                    this.setState({ isLoading: false, percentage: 100 });
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
        this.setState({ isLoading: false, percentage: 100 });
    }

    render() {
        return (
            <div id='welcome' className={!this.state.isLoading ? 'show' : ''}>
                <Loader color='White' isLoading={this.state.isLoading} percentage={this.state.percentage} />
                <div id='logo'>
                    {this.props.browser.device === 'Desktop' ? (
                        <Logo isRendered={() => this.setState({ isRendered: true })} isLoading={this.state.isLoading} />
                    ) : (
                        !this.state.isLoading && <img src='assets/interface/logo.gif' draggable='false' />
                    )}
                </div>
                <div id='message'>
                    Welcome to my website.
                    <br />
                    Click to view some of
                    <br />
                    my creative work.
                </div>
                <div id='enter' onClick={() => this.props.clickEnter()}>
                    <img src='assets/interface/arrowDown.png' draggable='false' />
                </div>
            </div>
        );
    }
}
