import * as React from 'react';
import { Gallery } from '../../../components/gallery/gallery';

export class Phobius extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Phobius e.U.</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2021</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Motion Design</p>
                    </div>
                </div>
                <Gallery>
                    <img src='assets/projects/phobius/phobius_01.jpg' />
                    <img src='assets/projects/phobius/phobius_02.jpg' />
                    <img src='assets/projects/phobius/phobius_03.jpg' />
                </Gallery>
                <div className='category text'>
                    <p>
                        This project was developed for the therapy centre »Phobius« where people are able to treat anxiety and panic disorders. The company
                        needed simple animations for social media campaigns to provide a digital library for all cases of anxiety disorders.
                    </p>
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/phobius/intro.mp4'
                        preload='metadata'
                        poster='assets/projects/phobius/phobius_02.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
                <div className='category text'>
                    <p>
                        Every animation started with an overview of each anxiety disorder and ended with additional information to contact the therapy centre. I
                        carried over the visual language of the corporate website, with flat colors to keep the animations clean and focused.
                    </p>
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/phobius/outro.mp4'
                        preload='metadata'
                        poster='assets/projects/phobius/phobius_03.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
            </div>
        );
    }
}
