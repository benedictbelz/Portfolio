import * as React from 'react';
import { Gallery } from '../../../Components/Gallery/Gallery';
import { Browser } from '../../../@types/browser';

interface Props {
    browser: Browser;
}

export class Metropolis extends React.Component<Props, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Metropolis</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2019</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Motion Design</p>
                    </div>
                </div>
                <Gallery browser={this.props.browser}>
                    <img src='assets/projects/metropolis/metropolis_01.jpg'/>
                    <img src='assets/projects/metropolis/metropolis_02.jpg'/>
                    <img src='assets/projects/metropolis/metropolis_03.jpg'/>
                    <img src='assets/projects/metropolis/metropolis_04.jpg'/>
                    <img src='assets/projects/metropolis/metropolis_05.jpg'/>
                    <img src='assets/projects/metropolis/metropolis_06.jpg'/>
                </Gallery>
                <div className='category text'>
                    <p>
                        This project was an exploration of the early silent movie »Metropolis« by Fritz Lang.
                        His visionary picture was a groundbreaking step for the Sience Fiction genre
                        in terms of visualization and story telling. I grabbed some essential parts of his movie and 
                        mixed it with modern elements of »Blade Runner«, an other visionary masterpiece.
                    </p>
                </div>
                <div className='category video'>
                    <video src='assets/projects/metropolis/metropolis.mp4' preload='metadata' poster='assets/projects/metropolis/metropolis_05.jpg' controls disablePictureInPicture controlsList='nodownload noremoteplayback'/>
                </div>
            </div>
        );
    }
}
