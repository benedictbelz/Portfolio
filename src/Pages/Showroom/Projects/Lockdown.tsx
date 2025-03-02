import * as React from 'react';
import { Gallery } from '../../../Components/Gallery/Gallery';
import { Browser } from '../../../@types/browser';

interface Props {
    browser: Browser;
}

export class Lockdown extends React.Component<Props, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Lockdown</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2020</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Motion Design</p>
                    </div>
                </div>
                <Gallery browser={this.props.browser}>
                    <img src='assets/projects/lockdown/lockdown_01.jpg'/>
                    <img src='assets/projects/lockdown/lockdown_02.jpg'/>
                    <img src='assets/projects/lockdown/lockdown_03.jpg'/>
                    <img src='assets/projects/lockdown/lockdown_04.jpg'/>
                    <img src='assets/projects/lockdown/lockdown_05.jpg'/>
                </Gallery>
                <div className='category text'>
                    <p>
                        The idea of this project arose during the coronavirus quarantine.
                        I wanted to capture the special atmosphere in Berlin which was expressed in empty streets,
                        occasional runners and a new shopping situation. The animation has exactly a duration of one minute
                        to create a minute of silence in honour of the victims of the pandemic.
                    </p>
                </div>
                <div className='category video'>
                    <video src='assets/projects/lockdown/lockdown.mp4' preload='metadata' poster='assets/projects/lockdown/lockdown_05.jpg' controls disablePictureInPicture controlsList='nodownload noremoteplayback'/>
                </div>
            </div>
        );
    }
}
