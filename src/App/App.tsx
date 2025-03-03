import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Header } from '../Components/Header/Header';
import { Welcome } from '../Pages/Welcome/Welcome';
import { Imprint } from '../Pages/Imprint/Imprint';
import { Information } from '../Pages/Information/Information';
import { Overview } from '../Pages/Overview/Overview';
import { Projects } from '../Pages/Projects/Projects';
import { getProjects } from '../@presets/projects';
import { Browser } from '../@types/browser';
import { Page } from '../@types/page';
import { Project } from '../@types/project';
import './App.scss';

interface States {
    browser: Browser;
    currentPage: Page;
	currentProject: Project | null;
	isTransition: boolean;
	projects: Project[];
	showWelcome: boolean;
}

class App extends React.Component<{}, States> {

    state: States = {
		browser: this.mountBrowser(),
		currentPage: 'Welcome',
		currentProject: null,
		isTransition: false,
		projects: getProjects(),
		showWelcome: true,
	}

    mountBrowser() {
        // DEFINE VARIABLES
        let device: Browser['device'],
            type: Browser['type'];
        // INITIALIZE DEVICE
        if ('ontouchstart' in window || 'onmsgesturechange' in window) {
            device = 'Mobile';
        } else {
            device = 'Desktop';
        }
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
        return { device, type };
    }

    clickEnter() {
		this.setState({ currentPage: 'Overview', isTransition: true });
		setTimeout(() => this.setState({ isTransition: false, showWelcome: false }), 1000);
	}

	clickLeft() {
		window.location.reload();
	}

	clickRight() {
		if (this.state.currentPage === 'Overview') {
			this.setState({ currentPage: 'Information', isTransition: true });
		}
		if (this.state.currentPage === 'Imprint' || this.state.currentPage === 'Information') {
			this.setState({ currentPage: 'Overview', isTransition: true });
		}
		if (this.state.currentPage === 'Projects') {
			this.setState({ currentPage: 'Overview', isTransition: true });
			setTimeout(() => this.setState({ currentProject: null }), 1000);
		}
		setTimeout(() => this.setState({ isTransition: false }), 1000);
	}

	clickImprint() {
		this.setState({ currentPage: 'Imprint', isTransition: true });
	}

	clickProject(project: Project) {
		this.setState({ currentPage: 'Projects', isTransition: true, currentProject: project });
	}

	render() {
		return (
			<div 
				id='app'
				className={[
					this.state.isTransition ? 'transition' : '',
					this.state.browser.device === 'Desktop' ? 'desktop' : 'mobile',
					this.state.currentPage === 'Imprint' ? 'imprint' : '',
					this.state.currentPage === 'Information' ? 'information' : '',
					this.state.currentPage === 'Overview' ? 'overview' : '',
					this.state.currentPage === 'Projects' ? 'projects' : '',
					this.state.currentPage === 'Welcome' ? 'welcome' : ''
				].filter(x => x).join(' ')}
			>
				{this.state.showWelcome && 
					<Welcome
						clickEnter={() => this.clickEnter()}
						browser={this.state.browser}
					/>
				}
				<Header
					clickLeft={() => this.clickLeft()}
					clickRight={() => this.clickRight()}
					currentPage={this.state.currentPage}
				/>
				<Imprint 
					browser={this.state.browser}
				/>
				<Information
					browser={this.state.browser}
				/>
				<Projects 
					browser={this.state.browser}
					currentProject={this.state.currentProject}
				/>
				<Overview
					clickImprint={() => this.clickImprint()}
					clickProject={(project: Project) => this.clickProject(project)}
					browser={this.state.browser}
					currentPage={this.state.currentPage}
					projects={this.state.projects}
				/>
			</div>
		);
	}
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);