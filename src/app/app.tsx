import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Header } from '../components/header/header';
import { Welcome } from '../pages/welcome/welcome';
import { Imprint } from '../pages/imprint/imprint';
import { Information } from '../pages/information/information';
import { Overview } from '../pages/overview/overview';
import { Projects } from '../pages/projects/projects';
import { Browser } from '../@types/browser';
import { Page } from '../@types/page';
import { Project } from '../@types/project';
import './app.scss';

interface States {
    browser: Browser;
    project: Project | null;
    transition: boolean;
    welcome: boolean;
}

class App extends React.Component<{}, States> {
    state: States = {
        browser: this.mountBrowser(),
        project: null,
        transition: false,
        welcome: true
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate(prevProps: any, prevState: States): void {
        if (this.state.browser.page !== prevState.browser.page) {
            setTimeout(() => this.setState({ transition: false }), 1000);
        }
        if (this.state.browser.page === 'Overview' && prevState.browser.page === 'Welcome') {
            setTimeout(() => this.setState({ welcome: false }), 1000);
        }
        if (this.state.browser.page === 'Overview' && prevState.browser.page === 'Projects') {
            setTimeout(() => this.setState({ project: null }), 1000);
        }
    }

    private mountBrowser() {
        // DEFINE VARIABLES
        let device: Browser['device'],
            direction: Browser['direction'],
            height: Browser['height'],
            page: Browser['page'],
            scroll: Browser['scroll'],
            type: Browser['type'],
            width: Browser['width'];
        // INITIALIZE DEVICE
        if ('ontouchstart' in window || 'onmsgesturechange' in window) {
            device = 'Mobile';
        } else {
            device = 'Desktop';
        }
        // INITIALIZE DIRECTION
        direction = 'None';
        // INITIALIZE HEIGHT AND WIDTH
        height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // INITIALIZE PAGE
        page = 'Welcome';
        // INITIALIZE SCROLL
        scroll = 0;
        // INITIALIZE TYPE
        if (navigator.userAgent.indexOf('Chrome') > -1) {
            type = 'Chrome';
        } else if (navigator.userAgent.indexOf('Firefox') > -1) {
            type = 'Firefox';
        } else if (navigator.userAgent.indexOf('MSIE') > -1) {
            type = 'Microsoft';
        } else if (navigator.userAgent.toLowerCase().indexOf('op') > -1) {
            type = 'Opera';
        } else if (navigator.userAgent.indexOf('Safari') > -1) {
            type = 'Safari';
        } else {
            type = 'Unknown';
        }
        // RETURN VARIABLES
        return { device, direction, height, page, scroll, type, width };
    }

    private handleResize = () => {
        // DEFINE VARIABLES
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // UPDATE STATE
        this.setState({ browser: { ...this.state.browser, height, width } });
    };

    private handleScroll = (event: any) => {
        // DEFINE VARIABLES
        let scroll = document.documentElement.scrollTop;
        let direction: Browser['direction'] = 'Down';
        // GET DIRECTION
        if (scroll < this.state.browser.scroll) {
            direction = 'Up';
        }
        // UPDATE STATE
        this.setState({ browser: { ...this.state.browser, direction, scroll } });
    };

    private handleEnter() {
        this.handlePage('Overview');
    }

    private handleLeft() {
        window.location.reload();
    }

    private handleRight() {
        if (this.state.browser.page === 'Overview') {
            this.handlePage('Information');
        } else if (this.state.browser.page === 'Imprint' || this.state.browser.page === 'Information' || this.state.browser.page === 'Projects') {
            this.handlePage('Overview');
        }
    }

    private handleImprint() {
        this.handlePage('Imprint');
    }

    private handleProject(project: Project) {
        this.setState({ project: project });
        this.handlePage('Projects');
    }

    private handlePage(page: Page) {
        this.setState({ browser: { ...this.state.browser, page }, transition: true });
    }

    render() {
        return (
            <div
                id='app'
                className={[
                    this.state.transition ? 'transition' : '',
                    this.state.browser.device === 'Desktop' ? 'desktop' : 'mobile',
                    this.state.browser.page === 'Imprint' ? 'imprint' : '',
                    this.state.browser.page === 'Information' ? 'information' : '',
                    this.state.browser.page === 'Overview' ? 'overview' : '',
                    this.state.browser.page === 'Projects' ? 'projects' : '',
                    this.state.browser.page === 'Welcome' ? 'welcome' : ''
                ]
                    .filter(x => x)
                    .join(' ')}
            >
                {this.state.welcome && <Welcome handleEnter={() => this.handleEnter()} browser={this.state.browser} />}
                <Header browser={this.state.browser} handleLeft={() => this.handleLeft()} handleRight={() => this.handleRight()} />
                <Imprint browser={this.state.browser} />
                <Information browser={this.state.browser} />
                <Projects browser={this.state.browser} project={this.state.project} />
                <Overview
                    handleImprint={() => this.handleImprint()}
                    handleProject={(project: Project) => this.handleProject(project)}
                    browser={this.state.browser}
                />
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
