import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Header } from '../components/header/header';
import { Welcome } from '../pages/welcome/welcome';
import { Imprint } from '../pages/imprint/imprint';
import { Information } from '../pages/information/information';
import { Overview } from '../pages/overview/overview';
import { Projects } from '../pages/projects/projects';
import { Browser } from '../stores/browser';
import './app.scss';

class App extends React.Component {
    private unsubscribe: () => void;

    componentDidMount() {
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
                {welcome && <Welcome />}
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
