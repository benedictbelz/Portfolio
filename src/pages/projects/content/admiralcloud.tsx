import * as React from 'react';
import { Gallery } from '../../../components/gallery/gallery';
import { Browser } from '../../../@types/browser';

interface Props {
    browser: Browser;
}

export class AdmiralCloud extends React.Component<Props, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>AdmiralCloud AG</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2020</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Development</p>
                        <p>UX Design</p>
                        <p>UI Design</p>
                    </div>
                    <div>
                        <p className='uppercase'>Collaboration</p>
                        <p>Anabell Jung</p>
                        <p>Daniel Züwerink</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>JavaScript</p>
                        <p>WordPress</p>
                    </div>
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralCloud/media.png' />
                </div>
                <div className='title' data-name='Introduction'>
                    1. Introduction
                </div>
                <div className='text'>
                    I was working as a developer and designer for the company »AdmiralCloud AG«. Their main product is a »Digital Asset Management« which can be
                    used to store and manage assets such as images, movies, audios or documents. Among other things, it enables organizing, finding, editing and
                    publishing assets from all over the world. My role was mainly to develop frontend and backend functionalities, as well as designing new UI
                    and UX features and implementing the desktop application »AC Sync«.
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/logo_01.jpg' />
                </div>
                <div className='title' data-name='Introduction'>
                    2. Where It All Began
                </div>
                <div className='text'>
                    The company was originally part of a film production company »mmpro Media AG« which produces corporate films around the world with 1.400
                    film crews in 126 countries. Being in the need of sharing necessary files worldwide, the company came up with its own
                    infrastructure which soon developed into a »Digital Asset Management« also used by other customers like »Continental«, »Lufthansa«,
                    »Techniker«, »Bilfinger«, »Vattenfall« and many more. When I joined the company the design was fairly outdated and needed some improvements
                    in UI and UX functionalities. In this way, I conducted an inventory and documented all buttons, colors, and functionalities to identify new
                    approaches for a future application.
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/analysis.png' />
                </div>

                {/* <div className='text'>
                    <p>
                        The original logo was a combination of the letters »A« and »C« forming a loop as a metaphor for the unlimited possibilities in the media
                        magagement system. Furthermore, it symbolizes a cloud as well.
                    </p>
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/logo_02.jpg' />
                </div>
                <div className='text'>
                    <p>
                        We wanted to modernize the logo to improve readibility. In this way, both letters should be clearly legible and the overall look
                        appearing and straightforward. I tried different color palettes and played around with different shapes.
                    </p>
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/logo_03.jpg' />
                </div>
                <div className='text'>
                    <p>
                        We decided to go with the most simple approach and created a colorful and flat version of the logo. This has enabled us to use the logo
                        for various purposes, be it marketing brochures, the website or product branding.
                    </p>
                </div>
                <Gallery browser={this.props.browser}>
                    <img src='assets/projects/admiralcloud/infographic_01.gif' />
                    <img src='assets/projects/admiralcloud/infographic_02.gif' />
                    <img src='assets/projects/admiralcloud/infographic_03.gif' />
                    <img src='assets/projects/admiralcloud/infographic_04.gif' />
                    <img src='assets/projects/admiralcloud/infographic_05.gif' />
                    <img src='assets/projects/admiralcloud/infographic_06.gif' />
                    <img src='assets/projects/admiralcloud/infographic_07.gif' />
                    <img src='assets/projects/admiralcloud/infographic_08.gif' />
                    <img src='assets/projects/admiralcloud/infographic_09.gif' />
                    <img src='assets/projects/admiralcloud/infographic_10.gif' />
                    <img src='assets/projects/admiralcloud/infographic_11.gif' />
                    <img src='assets/projects/admiralcloud/infographic_12.gif' />
                    <img src='assets/projects/admiralcloud/infographic_13.gif' />
                    <img src='assets/projects/admiralcloud/infographic_14.gif' />
                    <img src='assets/projects/admiralcloud/infographic_15.gif' />
                    <img src='assets/projects/admiralcloud/infographic_16.gif' />
                    <img src='assets/projects/admiralcloud/infographic_17.gif' />
                    <img src='assets/projects/admiralcloud/infographic_18.gif' />
                </Gallery>
                <div className='text'>
                    <p>
                        I animated several infographics to illustrate the different features of the product. All the individual graphics are attached at the
                        upper side of each page to offer a quick understanding. We chose the »GIF« format to ensure an accurate representation of each color.
                    </p>
                </div>
                <div className='design'>
                    <div className='color'>
                        <div style={{ color: '#FFFFFF', background: '#19324B' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>533 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>73%</p>
                                <p className='bold'>M</p>
                                <p>33%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>71%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>20</p>
                                <p className='bold'>G</p>
                                <p>50</p>
                                <p className='bold'>B</p>
                                <p>75</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#19324B</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#394f64' }}></div>
                            <div style={{ background: '#4C5F73' }}></div>
                            <div style={{ background: '#677888' }}></div>
                            <div style={{ background: '#9AA5B0' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='color'>
                        <div style={{ color: '#FFFFFF', background: '#90A0AF' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>7543 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>17%</p>
                                <p className='bold'>M</p>
                                <p>9%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>31%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>145</p>
                                <p className='bold'>G</p>
                                <p>160</p>
                                <p className='bold'>B</p>
                                <p>175</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#91A0AF</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#A0ADBA' }}></div>
                            <div style={{ background: '#A9B5C1' }}></div>
                            <div style={{ background: '#B6C0CA' }}></div>
                            <div style={{ background: '#CFD5DC' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='color'>
                        <div style={{ color: '#FFFFFF', background: '#4BAFFA' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>2915 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>70%</p>
                                <p className='bold'>M</p>
                                <p>30%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>2%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>75</p>
                                <p className='bold'>G</p>
                                <p>175</p>
                                <p className='bold'>B</p>
                                <p>250</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#4BAFFA</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#64BAFB' }}></div>
                            <div style={{ background: '#73C1FB' }}></div>
                            <div style={{ background: '#88CAFC' }}></div>
                            <div style={{ background: '#B0DCFD' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='color'>
                        <div style={{ color: '#FFFFFF', background: '#FFAA28' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>1235 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>0%</p>
                                <p className='bold'>M</p>
                                <p>33%</p>
                                <p className='bold'>Y</p>
                                <p>84%</p>
                                <p className='bold'>K</p>
                                <p>0%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>255</p>
                                <p className='bold'>G</p>
                                <p>170</p>
                                <p className='bold'>B</p>
                                <p>40</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#FFAA28</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#FFB646' }}></div>
                            <div style={{ background: '#FFBD57' }}></div>
                            <div style={{ background: '#FFC771' }}></div>
                            <div style={{ background: '#FFDAA0' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='font' style={{ fontFamily: 'Arial, Helvetica Neue, sans-serif', color: '#19324B' }}>
                        <p>Arial</p>
                        <div>
                            <p style={{ fontWeight: 100 }}>Aa</p>
                            <p style={{ fontWeight: 300 }}>Bb</p>
                            <p style={{ fontWeight: 500 }}>Cc</p>
                            <p style={{ fontWeight: 700 }}>123</p>
                        </div>
                        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p>abcdefghijklmnopqrstuvwxyz</p>
                        <p>1234567890!"#€%()=/@</p>
                    </div>
                </div>
                <div className='text'>
                    <p>
                        We used a dark blue and a soft grey as fundamental colors and introduced a light blue and juicy orange as accent colors. The font for
                        the website is »Arial« which ensures an easy readibility.
                    </p>
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/admiralcloud_01.jpg' />
                </div>
                <div className='text'>
                    <p>
                        All pages contain the same navigation and header which also introduce the particular functionality of the product. The whole concept is
                        orientated torwards »Flat Design« which offers clarity and a simple comprehension.
                    </p>
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/admiralcloud_02.jpg' />
                </div> */}
            </div>
        );
    }
}
