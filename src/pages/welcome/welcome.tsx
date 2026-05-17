import * as React from 'react';
import { Logo } from './logo/logo';
import { Browser } from '../../stores/browser';
import './welcome.scss';

interface Props {
    loading: boolean;
}

export class Welcome extends React.Component<Props, {}> {
    render() {
        // DEFINE VARIABLES
        const browser = Browser.getState();
        // RETURN COMPONENT
        return (
            <div id='welcome' className={this.props.loading ? '' : 'show'}>
                <div id='logo'>
                    {Browser.getState().device === 'Desktop' ? (
                        <Logo />
                    ) : (
                        <img src='assets/interface/logo.gif' draggable='false' />
                    )}
                </div>
                <div id='message'>
                    Welcome to my website.
                    <br />
                    Click to view some of
                    <br />
                    my creative work.
                </div>
                <div id='enter' onClick={() => browser.setPage('Overview')}>
                    <img src='assets/interface/arrowDown.png' draggable='false' />
                </div>
            </div>
        );
    }
}
