import * as React from 'react';
import { Gallery } from '../../../Components/Gallery/Gallery';
import { Browser } from '../../../@types/browser';

interface Props {
    browser: Browser;
}

export class ShimmeringNightmare extends React.Component<Props, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Shimmering Nightmare</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2016</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Illustration</p>
                    </div>
                </div>
                <Gallery browser={this.props.browser}>
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_01.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_02.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_03.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_04.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_05.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_06.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_07.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_08.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_09.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_10.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_11.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_12.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_13.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_14.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_15.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_16.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_17.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_18.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_19.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_20.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_21.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_22.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_23.jpg' />
                    <img src='assets/projects/shimmeringNightmare/shimmeringNightmare_24.jpg' />
                </Gallery>
                <div className='category text'>
                    <p>
                        This project was about a little girl who discovered her father's leisure activity during the night time. From then on, everything went
                        wrong. I printed the story and created a little book. The moral of the story is, don't leave your things lying around.
                    </p>
                </div>
            </div>
        );
    }
}
