import * as React from 'react';
import { Browser } from '../../@types/browser';
import { Page } from '../../@types/page';
import './Header.scss';

interface Props {
    browser: Browser;
    handleLeft: Function;
    handleRight: Function;
}

interface States {
    deactivateLeft: boolean;
    deactivateRight: boolean;
}

export class Header extends React.Component<Props, States> {
    state: States = {
        deactivateLeft: false,
        deactivateRight: false
    };

    private handleLeft() {
        this.props.handleLeft();
    }

    private handleRight() {
        if (this.state.deactivateRight) {
            return;
        }
        this.setState({ deactivateRight: true });
        this.props.handleRight();
        setTimeout(() => this.setState({ deactivateRight: false }), 1000);
    }

    render() {
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
                        className={this.props.browser.page === 'Overview' || this.props.browser.page === 'Welcome' ? 'show' : ''}
                        src='assets/interface/informationBack.png'
                        draggable='false'
                    />
                    <img
                        id='informationFront'
                        className={this.props.browser.page === 'Overview' || this.props.browser.page === 'Welcome' ? 'show' : ''}
                        src='assets/interface/informationFront.png'
                        draggable='false'
                    />
                    <img
                        id='arrowLeft'
                        className={this.props.browser.page === 'Imprint' || this.props.browser.page === 'Information' ? 'show' : ''}
                        src='assets/interface/arrowLeft.png'
                        draggable='false'
                    />
                    <img
                        id='arrowRight'
                        className={this.props.browser.page === 'Projects' ? 'show' : ''}
                        src='assets/interface/arrowRight.png'
                        draggable='false'
                    />
                </div>
            </div>
        );
    }
}
