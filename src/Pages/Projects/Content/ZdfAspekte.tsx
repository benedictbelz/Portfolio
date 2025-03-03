import * as React from 'react';
import { Gallery } from '../../../Components/Gallery/Gallery';
import { Browser } from '../../../@types/browser';

interface Props {
    browser: Browser;
}

export class ZdfAspekte extends React.Component<Props, {}> {
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
                <Gallery browser={this.props.browser}>
                    <img src='assets/projects/zdfAspekte/zdfAspekte_01.jpg' />
                    <img src='assets/projects/zdfAspekte/zdfAspekte_02.jpg' />
                    <img src='assets/projects/zdfAspekte/zdfAspekte_03.jpg' />
                    <img src='assets/projects/zdfAspekte/zdfAspekte_04.jpg' />
                </Gallery>
                <div className='category text'>
                    <p>
                        This project was developed for the television show »ZDF Aspekte«. It's about the ongoing debate in Germany about the headscarf ban which
                        is a quite controverse topic. The clip tries to show the current legal situation in Germany and its future prospects.
                    </p>
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/zdfAspekte/zdfAspekte.mp4'
                        preload='metadata'
                        poster='assets/projects/zdfAspekte/zdfAspekte_02.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
            </div>
        );
    }
}
