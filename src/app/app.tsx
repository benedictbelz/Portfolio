import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Header } from '../components/header/header';
import { Loader } from '../components/loader/loader';
import { Welcome } from '../pages/welcome/welcome';
import { Imprint } from '../pages/imprint/imprint';
import { Information } from '../pages/information/information';
import { Overview } from '../pages/overview/overview';
import { Projects } from '../pages/projects/projects';
import { Browser } from '../stores/browser';
import './app.scss';

interface States {
    loading: boolean;
    percentage: number;
}

class App extends React.Component<{}, States> {
    private unsubscribe: () => void;

    state: States = {
        loading: true,
        percentage: 0
    };

    componentDidMount() {
        this.handleLoad();
        this.unsubscribe = Browser.subscribe((state, prevState) => {
            if (state.transition !== prevState.transition || state.welcome !== prevState.welcome) {
                this.forceUpdate();
            }
            if (state.page !== prevState.page) {
                Browser.setState({ transition: true });
                if (state.page === 'Overview' && prevState.page === 'Welcome') {
                    setTimeout(() => Browser.setState({ welcome: false, transition: false }), 1000);
                } else {
                    setTimeout(() => Browser.setState({ transition: false }), 1000);
                }
                if (state.page === 'Overview' && prevState.page === 'Projects') {
                    setTimeout(() => Browser.setState({ project: null }), 1000);
                }
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    private async handleLoad() {
        // AWAIT PROMISE
        await new Promise(resolve => setTimeout(resolve, 500));
        // DEFINE VARIABLES
        let { device, page, project, welcome } = Browser.getState();
        let images = Array.from(document.images);
        let percentage = 0;
        // GO THROUGH IMAGES
        if (images.length > 0) {
            await Promise.all(
                images.map(
                    img =>
                        new Promise<void>(resolve => {
                            const done = () => {
                                percentage++;
                                this.setState({ percentage: Math.floor((percentage / images.length) * 100) });
                                resolve();
                            };
                            if (img.complete) {
                                done();
                            } else {
                                img.onload = done;
                                img.onerror = done;
                            }
                        })
                )
            );
        }
        // WAIT FOR LOGO
        if (welcome && device === 'Desktop') {
            await new Promise<void>(resolve => {
                const check = () => (Browser.getState().logo ? resolve() : requestAnimationFrame(check));
                check();
            });
        }
        // UPDATE STATE
        this.setState({ loading: false, percentage: 100 });
    }

    render() {
        // DEFINE VARIABLES
        const browser = Browser.getState();
        const device = browser.device;
        const page = browser.page;
        const welcome = browser.welcome;
        // RETURN COMPONENT
        return (
            <div
                id='app'
                className={[
                    Browser.getState().transition ? 'transition' : '',
                    device === 'Desktop' ? 'desktop' : 'mobile',
                    page === 'Imprint' ? 'imprint' : '',
                    page === 'Information' ? 'information' : '',
                    page === 'Overview' ? 'overview' : '',
                    page === 'Projects' ? 'projects' : '',
                    page === 'Welcome' ? 'welcome' : ''
                ]
                    .filter(x => x)
                    .join(' ')}
            >
                <Loader
                    color={page === 'Information' || page === 'Projects' ? 'black' : 'white'}
                    loading={this.state.loading}
                    percentage={this.state.percentage}
                />
                {welcome && <Welcome loading={this.state.loading} />}
                <Header />
                <Imprint />
                <Information />
                <Projects />
                <Overview />
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
