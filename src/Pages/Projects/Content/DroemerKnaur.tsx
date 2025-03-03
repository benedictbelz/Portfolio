import * as React from 'react';
import { Gallery } from '../../../Components/Gallery/Gallery';
import { Browser } from '../../../@types/browser';

interface Props {
    browser: Browser;
}

export class DroemerKnaur extends React.Component<Props, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Verlagsgruppe</p>
                        <p>Droemer Knaur GmbH</p>
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
                        <p>Charlotte Kauer</p>
                        <p>Gabie Schnitzlein</p>
                        <p>Karsan Ameen</p>
                        <p>Klaus B. Wolf</p>
                        <p>Markus Röleke</p>
                        <p>Norbert Stengelin</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>Adobe After Effects</p>
                        <p>Adobe Illustrator</p>
                        <p>Adobe Photoshop</p>
                        <p>Adobe Premiere</p>
                    </div>
                </div>
                <Gallery browser={this.props.browser}>
                    <img src='assets/projects/droemerKnaur/droemerKnaur_01.jpg' />
                    <img src='assets/projects/droemerKnaur/droemerKnaur_02.jpg' />
                    <img src='assets/projects/droemerKnaur/droemerKnaur_03.jpg' />
                    <img src='assets/projects/droemerKnaur/droemerKnaur_04.jpg' />
                    <img src='assets/projects/droemerKnaur/droemerKnaur_05.jpg' />
                    <img src='assets/projects/droemerKnaur/droemerKnaur_06.jpg' />
                </Gallery>
                <div className='category text'>
                    <p>
                        This project was developed for the German publishing house »Droemer Knaur«. It aimed to demonstrate the internal production process of a
                        book and an e-book. I established two sidekick characters which would run through all necessary steps from the beginning writing process
                        to the final publication. For demonstration purposes, the client decided to use the author Sebastian Fitzek and his recently published
                        book »Das Paket«. The artwork is mostly a homage to the show »Karambolage« which is part of the television channel »Arte«.
                    </p>
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/droemerKnaur/droemerKnaur.mp4'
                        preload='metadata'
                        poster='assets/projects/droemerKnaur/droemerKnaur_05.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
            </div>
        );
    }
}
