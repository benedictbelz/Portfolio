import * as React from 'react';
import { Preview } from './preview/preview';
import { Scrollbar } from '../../components/scrollbar/scrollbar';
import { Browser } from '../../stores/browser';
import { Selection } from '../../@types/project';
import { getProjects } from '../../@presets/projects';
import './overview.scss';

interface States {
    selection: Selection;
}

export class Overview extends React.Component<{}, States> {
    private timeout: ReturnType<typeof setTimeout>[] = [];
    private unsubscribe: () => void;

    state: States = {
        selection: 'All'
    };

    componentDidMount() {
        window.matchMedia('(max-width: 2000px)').addEventListener('change', () => this.handleAnimation());
        window.matchMedia('(max-width: 1200px)').addEventListener('change', () => this.handleAnimation());
        window.matchMedia('(max-width: 900px)').addEventListener('change', () => this.handleAnimation());
        window.matchMedia('(max-width: 600px)').addEventListener('change', () => this.handleAnimation());
        this.unsubscribe = Browser.subscribe((state, prevState) => {
            if (state.page === 'Overview' && prevState.page === 'Welcome') {
                this.handleAnimation();
                this.handleSelection();
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    private handleAnimation() {
        // DEFINE VARIABLES
        let index = 0;
        let projects = document.querySelectorAll('.preview') as unknown as HTMLElement[];
        let selection = document.querySelectorAll('.preview.show') as unknown as HTMLElement[];
        // RESET TIMEOUT
        this.timeout.forEach(timeout => clearTimeout(timeout));
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
        // DEFINE VARIABLES
        const browser = Browser.getState();
        // RETURN COMPONENT
        return (
            <Scrollbar color='black' id='overview'>
                <ul id='selection'>
                    {(['All', 'Digital', 'Film', 'Art'] as Selection[]).map(selection => {
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
                        return <Preview key={project.title} selection={this.state.selection} project={project} />;
                    })}
                </div>
                <div id='footer'>
                    <span>© Benedict Belz</span>
                    <span className='divider' />
                    <span className='underline black' onClick={() => browser.setPage('Imprint')}>
                        Imprint
                    </span>
                </div>
            </Scrollbar>
        );
    }
}
