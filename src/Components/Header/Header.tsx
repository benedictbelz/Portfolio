import * as React from 'react';
import { Page } from '../../@types/page';
import './Header.scss';

interface Props {
    clickLeft: Function;
    clickRight: Function;
    currentPage: Page;
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

    private clickLeft() {
        this.props.clickLeft();
    }

    private clickRight() {
        if (this.state.deactivateRight) {
            return;
        }
        this.setState({ deactivateRight: true });
        this.props.clickRight();
        setTimeout(() => this.setState({ deactivateRight: false }), 1000);
    }

    render() {
        return (
            <div id='header'>
                <div id='headerLeft' onClick={() => this.clickLeft()}>
                    <img id='logoBack' className={'show'} src='assets/interface/logoBack.png' draggable='false' />
                    <img id='logoFront' className={'show'} src='assets/interface/logoFront.png' draggable='false' />
                    <img id='arrowUp' className={''} src='assets/interface/arrowUp.png' draggable='false' />
                </div>
                <div id='headerRight' onClick={() => this.clickRight()}>
                    <img
                        id='informationBack'
                        className={this.props.currentPage === 'Overview' || this.props.currentPage === 'Welcome' ? 'show' : ''}
                        src='assets/interface/informationBack.png'
                        draggable='false'
                    />
                    <img
                        id='informationFront'
                        className={this.props.currentPage === 'Overview' || this.props.currentPage === 'Welcome' ? 'show' : ''}
                        src='assets/interface/informationFront.png'
                        draggable='false'
                    />
                    <img
                        id='arrowLeft'
                        className={this.props.currentPage === 'Imprint' || this.props.currentPage === 'Information' ? 'show' : ''}
                        src='assets/interface/arrowLeft.png'
                        draggable='false'
                    />
                    <img
                        id='arrowRight'
                        className={this.props.currentPage === 'Projects' ? 'show' : ''}
                        src='assets/interface/arrowRight.png'
                        draggable='false'
                    />
                </div>
            </div>
        );
    }
}
