import * as React from 'react';
import { Browser } from '../../../@types/browser';
import { Project, Selection } from '../../../@types/project';
import './Preview.scss';

interface Props {
    browser: Browser;
    clickProject: Function;
    currentSelection: Selection;
    project: Project;
}

export class Preview extends React.Component<Props,{}> {

    render() {
        return (
            <div 
                className={[
                    'project',
                    this.props.project.type === this.props.currentSelection || this.props.currentSelection === 'All' ? 'show' : '',
                    this.props.project.icon === 'White' ? 'white' : '',
                    this.props.project.icon === 'Black' ? 'black' : ''
                ].filter(x => x).join(' ')}
                onClick={() => { if (this.props.browser.device === 'Mobile') this.props.clickProject(); }}
            >
                <div className='wrapper'>
                    <div className='label'>
                        {this.props.project.type === 'Art' && <img src='assets/interface/art.svg' draggable='false'/>}
                        {this.props.project.type === 'Digital' && <img src='assets/interface/digital.svg' draggable='false'/>}
                        {this.props.project.type === 'Film' && <img src='assets/interface/film.svg' draggable='false'/>}
                    </div>
                    {this.props.browser.device === 'Desktop' &&
                        <>
                            <div 
                                className='description'
                                onClick={() => { if (this.props.browser.device === 'Desktop') this.props.clickProject(); }}
                            >
                                <p className='title uppercase'>{this.props.project.title}</p>
                            </div>
                            <div className='link'>
                                {this.props.project.links?.github && 
                                    <a 
                                        className='github'
                                        href={this.props.project.links.github}
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                        title='GitHub'
                                    >
                                        <img src='assets/interface/github.svg' draggable='false'/>
                                    </a>
                                }
                                {this.props.project.links?.vimeo && 
                                    <a 
                                        className='vimeo'
                                        href={this.props.project.links.vimeo}
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                        title='Vimeo'
                                    >
                                        <img src='assets/interface/vimeo.svg' draggable='false'/>
                                    </a>
                                }
                                {this.props.project.links?.youtube && 
                                    <a 
                                        className='youtube'
                                        href={this.props.project.links.youtube}
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                        title='YouTube'
                                    >
                                        <img src='assets/interface/youtube.svg' draggable='false'/>
                                    </a>
                                }
                                {this.props.project.links?.www && 
                                    <a 
                                        className='www'
                                        href={this.props.project.links.www}
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                        title='Website'
                                    >
                                        <img src='assets/interface/www.svg' draggable='false'/>
                                    </a>
                                }
                            </div>
                        </>
                    }
                    <div className='image'>
                        <img src={this.props.project.image} draggable='false'/>
                    </div>
                </div>
            </div>
        );
    }
}
