import * as React from 'react';
import { Browser } from '../../stores/browser';
import './header.scss';

interface States {
    deactivateLeft: boolean;
    deactivateRight: boolean;
}

export class Header extends React.Component<{}, States> {
    state: States = {
        deactivateLeft: false,
        deactivateRight: false
    };

    private handleLeft() {
        window.location.href = window.location.pathname;
    }

    private handleRight() {
        // IF DEACTIVATED
        if (this.state.deactivateRight) {
            return;
        }
        // UPDATE STATE
        this.setState({ deactivateRight: true });
        // DEFINE VARIABLES
        const browser = Browser.getState();
        const page = browser.page;
        // GO TO INFORMATION
        if (page === 'Overview') {
            Browser.getState().setPage('Information');
        }
        // GO TO OVERVIEW
        else if (page === 'Imprint' || page === 'Information' || page === 'Projects') {
            Browser.getState().setPage('Overview');
        }
        // UPDATE STATE
        setTimeout(() => this.setState({ deactivateRight: false }), 1000);
    }

    render() {
        // DEFINE VARIABLES
        const browser = Browser.getState();
        const page = browser.page;
        // RETURN COMPONENT
        return (
            <div id='header'>
                <div id='headerLeft' onClick={() => this.handleLeft()}>
                    <img id='logoBack' className={'show'} src='assets/interface/logoBack.png' draggable='false' />
                    <img id='logoFront' className={'show'} src='assets/interface/logoFront.png' draggable='false' />
                    <img id='arrowUp' className={''} src='assets/interface/arrowUp.png' draggable='false' />
                </div>
                <div id='headerRight' onClick={() => this.handleRight()}>
                    <img
                        id='informationBack'
                        className={page === 'Overview' || page === 'Welcome' ? 'show' : ''}
                        src='assets/interface/informationBack.png'
                        draggable='false'
                    />
                    <img
                        id='informationFront'
                        className={page === 'Overview' || page === 'Welcome' ? 'show' : ''}
                        src='assets/interface/informationFront.png'
                        draggable='false'
                    />
                    <img
                        id='arrowLeft'
                        className={page === 'Imprint' || page === 'Information' ? 'show' : ''}
                        src='assets/interface/arrowLeft.png'
                        draggable='false'
                    />
                    <img
                        id='arrowRight'
                        className={page === 'Projects' ? 'show' : ''}
                        src='assets/interface/arrowRight.png'
                        draggable='false'
                    />
                </div>
            </div>
        );
    }
}
