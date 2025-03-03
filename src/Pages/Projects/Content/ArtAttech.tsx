import * as React from 'react';
import { Gallery } from '../../../Components/Gallery/Gallery';
import { Browser } from '../../../@types/browser';

interface Props {
    browser: Browser;
}

export class ArtAttech extends React.Component<Props, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Art Attech</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2019</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Motion Design</p>
                    </div>
                    <div>
                        <p className='uppercase'>Collaboration</p>
                        <p>Karsan Ameen</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>Adobe After Effects</p>
                        <p>Adobe Premiere</p>
                        <p>Cinema 4D</p>
                    </div>
                </div>
                <Gallery browser={this.props.browser}>
                    <img src='assets/projects/artAttech/artAttech_01.jpg' />
                    <img src='assets/projects/artAttech/artAttech_02.jpg' />
                    <img src='assets/projects/artAttech/artAttech_03.jpg' />
                    <img src='assets/projects/artAttech/artAttech_04.jpg' />
                </Gallery>
                <div className='category text'>
                    <p>
                        This project was developed as a teaser for the vernissage »Art Attech« in Vienna. In this sense, the teaser celebrates the collision of
                        art and music.
                    </p>
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/artAttech/artAttech.mp4'
                        preload='metadata'
                        poster='assets/projects/artAttech/artAttech_03.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
            </div>
        );
    }
}
