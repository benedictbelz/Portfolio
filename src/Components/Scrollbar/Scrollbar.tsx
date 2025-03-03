import * as React from 'react';
import { Browser } from '../../@types/browser';
import './Scrollbar.scss';

interface Props {
    browser: Browser;
    children: React.ReactNode;
    color: 'Black' | 'White';
    id: string;
}

interface States {
    element: HTMLElement | null;
    scroll: number;
}

export class Scrollbar extends React.Component<Props, States> {
    state: States = {
        element: null,
        scroll: 0
    };

    componentDidMount() {
        this.initScrollbar();
    }

    private initScrollbar() {
        // IF MOBILE RETURN
        if (this.props.browser.device === 'Mobile') {
            return;
        }
        // DEFINE VARIABLES
        const element = document.querySelector('#' + this.props.id + '>.content') as unknown as HTMLElement;
        // UPDATE STATE
        this.setState({ element });
        // ADD EVENT LISTENER SCROLL
        element.addEventListener('scroll', () => this.updateScrollbar());
        // ADD EVENT LISTENER RESIZE
        window.addEventListener('resize', () => this.updateScrollbar());
    }

    private updateScrollbar() {
        // DEFINE VARIABLES
        let height = this.state.element.scrollHeight - this.state.element.clientHeight;
        let scroll = this.state.element.scrollTop;
        let percentage = Math.floor((scroll / height) * 1000) / 1000;
        // CHECK BOUNDARY
        if (percentage <= 0 || isNaN(percentage)) {
            percentage = 0;
        }
        if (percentage >= 1 && height !== 0) {
            percentage = 1;
        }
        // UPDATE SCROLL
        this.setState({ scroll: percentage });
    }

    render() {
        return (
            <div id={this.props.id}>
                {this.props.browser.device === 'Mobile' && this.props.children}
                {this.props.browser.device === 'Desktop' && (
                    <>
                        <div
                            className={['scrollbar', this.state.element ? this.state.element.id : '', this.props.color === 'Black' ? 'black' : 'white']
                                .filter(x => x)
                                .join(' ')}
                        >
                            <div style={{ transform: 'scaleY(' + this.state.scroll + ')' }} />
                        </div>
                        <div className='content'>{this.props.children}</div>
                    </>
                )}
            </div>
        );
    }
}
