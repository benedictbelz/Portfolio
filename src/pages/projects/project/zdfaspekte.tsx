import * as React from 'react';
import { Gallery } from '../../../components/gallery/gallery';

export class ZdfAspekte extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>ZDF Aspekte</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2020</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Motion Design</p>
                    </div>
                    <div>
                        <p className='uppercase'>Collaboration</p>
                        <p>Aleks Mijatovic</p>
                        <p>Shantu Bhattacharjee</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>Adobe After Effects</p>
                        <p>Adobe Illustrator</p>
                    </div>
                </div>
                <Gallery>
                    <img src='assets/projects/zdfaspekte/zdfaspekte_01.jpg' />
                    <img src='assets/projects/zdfaspekte/zdfaspekte_02.jpg' />
                    <img src='assets/projects/zdfaspekte/zdfaspekte_03.jpg' />
                    <img src='assets/projects/zdfaspekte/zdfaspekte_04.jpg' />
                </Gallery>
                <div className='category text'>
                    <p>
                        This project was developed for the television show »ZDF Aspekte«. It's about the ongoing debate in Germany about the headscarf ban which
                        is a quite controversial topic. The clip tries to show the current legal situation in Germany and its future prospects.
                    </p>
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/zdfaspekte/zdfaspekte.mp4'
                        preload='metadata'
                        poster='assets/projects/zdfaspekte/zdfaspekte_02.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
            </div>
        );
    }
}
