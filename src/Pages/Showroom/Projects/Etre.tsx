import * as React from 'react';
import { Gallery } from '../../../Components/Gallery/Gallery';
import { Browser } from '../../../@types/browser';

interface Props {
    browser: Browser;
}

export class Etre extends React.Component<Props, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Être</p>
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
                    <img src='assets/projects/etre/etre_01.jpg'/>
                    <img src='assets/projects/etre/etre_02.jpg'/>
                    <img src='assets/projects/etre/etre_03.jpg'/>
                    <img src='assets/projects/etre/etre_04.jpg'/>
                    <img src='assets/projects/etre/etre_05.jpg'/>
                    <img src='assets/projects/etre/etre_06.jpg'/>
                </Gallery>
                <div className='category text'>
                    <p>
                        This project was developed as a teaser for the party collective »Être« in Vienna.
                        The whole concept revives the philosophy of existentialism intertwined with Greek mythology.
                        The three statues show Apollon, Dionysos and Aphrodite who symbolically represent
                        the third reoccurrence of this event. All footage in between the temple shots were
                        collected Super 8 clips which emphasize the nature of being.
                    </p>
                </div>
                <div className='category video'>
                    <video src='assets/projects/etre/etre.mp4' preload='metadata' poster='assets/projects/etre/etre_03.jpg' controls disablePictureInPicture controlsList='nodownload noremoteplayback'/>
                </div>
            </div>
        );
    }
}
