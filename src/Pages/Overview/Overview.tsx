import * as React from 'react';
import { Preview } from './Preview/Preview';
import { Scrollbar } from '../../Components/Scrollbar/Scrollbar';
import { Browser } from '../../@types/browser';
import { Selection } from '../../@types/project';
import { getProjects } from '../../@presets/projects';
import './Overview.scss';

interface Props {
    browser: Browser;
    handleImprint: Function;
    handleProject: Function;
}

interface States {
    selection: Selection;
}

export class Overview extends React.Component<Props, States> {
    private timeout: any = [];

    state: States = {
        selection: 'All'
    };

    componentDidMount() {
        window.matchMedia('(max-width: 2000px)').addEventListener('change', () => this.handleAnimation());
        window.matchMedia('(max-width: 1200px)').addEventListener('change', () => this.handleAnimation());
        window.matchMedia('(max-width: 900px)').addEventListener('change', () => this.handleAnimation());
        window.matchMedia('(max-width: 600px)').addEventListener('change', () => this.handleAnimation());
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.browser.page === 'Overview' && prevProps.browser.page === 'Welcome') {
            this.handleAnimation();
            this.handleSelection();
        }
    }

    private handleAnimation() {
        // DEFINE VARIABLES
        let index = 0;
        let projects = document.querySelectorAll('.preview') as unknown as HTMLElement[];
        let selection = document.querySelectorAll('.preview.show') as unknown as HTMLElement[];
        // RESET TIMEOUT
        this.timeout.forEach((timeout: any) => clearTimeout(timeout));
        // RESET PROJECTS
        projects.forEach(project => {
            project.classList.add('opacity');
            project.classList.remove('animation');
        });
        // DEFINE RECURSIVE FUNCTION
        const animation = () => {
            selection[index].classList.remove('opacity');
            selection[index].offsetWidth;
            selection[index].classList.add('animation');
            selection[index].style.animationPlayState = 'paused';
            selection[index].style.animationPlayState = 'running';
            index++;
            if (index < selection.length) {
                this.timeout.push(setTimeout(() => animation(), 100));
            }
        };
        // START ANIMATION
        if (selection.length !== 0) {
            animation();
        }
    }

    private async handleSelection() {
        // DEFINE VARIABLES
        const selection = document.querySelectorAll('#selection li') as unknown as HTMLElement[];
        // ADD OPACITY
        selection.forEach(item => item.classList.add('opacity'));
        // GO THROUGH SELECTION
        for (let index = 0; index < selection.length; index++) {
            selection[index].classList.remove('opacity');
            selection[index].classList.add('animation');
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    render() {
        return (
            <Scrollbar browser={this.props.browser} color='black' id='overview'>
                <ul id='selection'>
                    {(['All', 'Digital', 'Film'] as Selection[]).map(selection => {
                        return (
                            <li
                                key={selection}
                                className={[selection.toLowerCase(), this.state.selection === selection && 'current'].filter(x => x).join(' ')}
                                onClick={() => {
                                    if (this.state.selection !== selection) {
                                        this.setState({ selection: selection });
                                        setTimeout(() => this.handleAnimation());
                                    }
                                }}
                            >
                                <img src={'assets/interface/' + selection.toLowerCase() + '.svg'} draggable='false' />
                                <p>{selection}</p>
                            </li>
                        );
                    })}
                </ul>
                <div id='previews'>
                    {getProjects().map(project => {
                        return (
                            <Preview
                                key={project.title}
                                browser={this.props.browser}
                                handleProject={() => {
                                    this.props.handleProject(project);
                                }}
                                selection={this.state.selection}
                                project={project}
                            />
                        );
                    })}
                </div>
                <div id='footer'>
                    <span>© Benedict Belz</span>
                    <span className='divider' />
                    <span className='underline black' onClick={() => this.props.handleImprint()}>
                        Imprint
                    </span>
                </div>
            </Scrollbar>
        );
    }
}
