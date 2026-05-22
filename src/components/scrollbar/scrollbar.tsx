import * as React from 'react';
import { Browser } from '../../stores/browser';
import './scrollbar.scss';

interface Props {
    children: React.ReactNode;
    color: 'black' | 'white';
    id: string;
}

interface States {
    scroll: number;
}

export class Scrollbar extends React.Component<Props, States> {
    private content: React.RefObject<HTMLDivElement> = React.createRef();

    state: States = {
        scroll: 0
    };

    componentDidMount() {
        this.initScrollbar();
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.updateScrollbar);
        this.content.current?.removeEventListener('scroll', this.updateScrollbar);
    }

    private initScrollbar() {
        // DEFINE VARIABLES
        const browser = Browser.getState();
        const device = browser.device;
        // IF NO CONTENT OR MOBILE RETURN
        if (!this.content.current || device === 'Mobile') {
            return;
        }
        // ADD EVENT LISTENERS
        window.addEventListener('resize', this.updateScrollbar);
        this.content.current.addEventListener('scroll', this.updateScrollbar);
    }

    private updateScrollbar = () => {
        // IF NO CONTENT RETURN
        if (!this.content.current) {
            return;
        }
        // DEFINE VARIABLES
        let height = this.content.current.scrollHeight - this.content.current.clientHeight;
        let scroll = this.content.current.scrollTop;
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
    };

    render() {
        // DEFINE VARIABLES
        const browser = Browser.getState();
        const device = browser.device;
        // RETURN COMPONENT
        return (
            <div id={this.props.id}>
                {device === 'Desktop' && (
                    <div className={['scrollbar', this.props.color].filter(x => x).join(' ')}>
                        <div style={{ transform: 'scaleY(' + this.state.scroll + ')' }} />
                    </div>
                )}
                <div ref={this.content} className='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
