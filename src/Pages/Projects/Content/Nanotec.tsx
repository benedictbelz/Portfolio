import * as React from 'react';
import { Gallery } from '../../../Components/Gallery/Gallery';
import { Browser } from '../../../@types/browser';

interface Props {
    browser: Browser;
}

export class Nanotec extends React.Component<Props, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Nanotec GmbH</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2017</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Motion Design</p>
                    </div>
                    <div>
                        <p className='uppercase'>Collaboration</p>
                        <p>Benno Wimmer</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>Adobe After Effects</p>
                        <p>Adobe Illustrator</p>
                        <p>Adobe Premiere</p>
                        <p>Cinema 4D</p>
                    </div>
                </div>
                <Gallery browser={this.props.browser}>
                    <img src='assets/projects/nanotec/nanotec_01.jpg'/>
                    <img src='assets/projects/nanotec/nanotec_02.jpg'/>
                    <img src='assets/projects/nanotec/nanotec_03.jpg'/>
                    <img src='assets/projects/nanotec/nanotec_04.jpg'/>
                    <img src='assets/projects/nanotec/nanotec_05.jpg'/>
                    <img src='assets/projects/nanotec/nanotec_06.jpg'/>
                    <img src='assets/projects/nanotec/nanotec_07.jpg'/>
                </Gallery>
                <div className='category text'>
                    <p>
                        This project was about showing customers the functioning principle of a stepper motor.
                        It was necessary to picture all details of the individual parts to understand the physical laws
                        which influence the conversion of electrical energy into mechanical energy.
                        Additionally, we developed multiple animations to show all individual parts and
                        the montage of the whole motor which can be viewed on the corporate webpage.
                    </p>
                </div>
                <div className='category video'>
                    <video src='assets/projects/nanotec/nanotec.mp4' preload='metadata' poster='assets/projects/nanotec/nanotec_05.jpg' controls disablePictureInPicture controlsList='nodownload noremoteplayback'/>
                </div>
            </div>
        );
    }
}
