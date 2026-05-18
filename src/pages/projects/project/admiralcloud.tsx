import * as React from 'react';
import { Gallery } from '../../../components/gallery/gallery';
import { Menu } from '../../../components/menu/menu';

export class AdmiralCloud extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <Menu />
                <div className='information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>AdmiralCloud AG</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2021</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Development</p>
                        <p>UI/UX Design</p>
                    </div>
                    <div>
                        <p className='uppercase'>Collaboration</p>
                        <p>Julius Eckert</p>
                        <p>Daniel Züwerink</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>React</p>
                        <p>TypeScript</p>
                        <p>Electron</p>
                    </div>
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/media.png' />
                </div>
                <div className='title' data-name='1. Introduction'>
                    1. Introduction
                </div>
                <div className='text'>
                    I worked as designer and later as fullstack developer for the company »AdmiralCloud AG«. The main product is a »Digital Asset Management«
                    which can be used to store and manage assets such as images, movies, audios or documents. Among other things, it enables organizing,
                    finding, editing and publishing assets from all over the world. My role was to develop frontend and backend functionalities, as well as
                    designing new UI/UX features and implementing the desktop application »AC Sync«.
                </div>
                <div className='title' data-name='2. Where It All Began'>
                    2. Where It All Began
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/client_old_01.jpg' />
                </div>
                <div className='text'>
                    The company was originally part of the film production company »mmpro Media AG« which produced corporate movies around the world with 1.400
                    film crews in 126 countries. Being in the need of sharing necessary files worldwide, the company came up with its own infrastructure which
                    soon developed into a »Digital Asset Management« also used by other customers like »Continental«, »Lufthansa«, »Techniker«, »Bilfinger«,
                    »Vattenfall« and many more.
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/client_old_02.jpg' />
                </div>
                <div className='text'>
                    When I joined the company the design was fairly outdated and needed some improvements and better UI/UX functionalities. In this way, I
                    conducted an inventory and documented all buttons, colors, and functionalities to identify new approaches for a future application. The
                    existing elements lacked consistency and required a more unified visual language. As part of the same process, the logo was redesigned as
                    well.
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/client_old_03.jpg' />
                </div>
                <div className='title' data-name='3. A New Design'>
                    3. A New Design
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/client_new_01.jpg' />
                </div>
                <div className='text'>
                    From there, we took a step back and rethought the whole application. All interfaces were brought in line with a consistent design, which
                    made navigating the product a lot more straightforward and gave users a clearer picture of what was going on. On the development side, the
                    code was refactored and components were reused across the whole application, which made it feel more consistent.
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/client_new_02.jpg' />
                </div>
                <div className='text'>
                    We also reworked the menu and revisited several features to improve the UX flow, which brought more structure and made everything work
                    better together. The video below gives an impression of the new design.
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/admiralcloud/client_new_03.mp4'
                        preload='metadata'
                        poster='assets/projects/admiralcloud/client_new_03.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
                <div className='text'>
                    Some features came directly from customer feedback as they needed solutions for very specific needs. One of them was a workflow feature,
                    which allowed assets to pass different stages, giving them more control. Each feature required changes with varying complexity in both the
                    frontend and backend.
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/admiralcloud/client_new_04.mp4'
                        preload='metadata'
                        poster='assets/projects/admiralcloud/client_new_04.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
                <div className='text'>
                    An other tool was the MediaHub which offered a more tailored experience of asset management for end users. For this we introduced a drag and
                    drop system and a folder structure to share assets in a clean, organized way.
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/admiralcloud/client_new_05.mp4'
                        preload='metadata'
                        poster='assets/projects/admiralcloud/client_new_05.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
                <div className='title' data-name='4. AC Sync'>
                    4. AC Sync
                </div>
                <div className='category text'>
                    <p>
                        To provide a better integration we developed »AC Sync«, which synchronizes data from the »Digital Asset Management« to a desktop device
                        so that customers can access and edit files independently of their network connection. This was developed for MacOS and Windows and
                        works in a way like »Dropbox« which offers custom functionalities like creating »Download« or »Upload« folders.
                    </p>
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/admiralcloud/acsync_01.mp4'
                        preload='metadata'
                        poster='assets/projects/admiralcloud/acsync_01.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
                <div className='category text'>
                    <p>
                        The »Upload« folders allow customizations like »Tags« and »Security Groups« to structure uploaded files accordingly in the »Digital
                        Asset Management«. Futhermore, it's possible to let »AC Sync« upload all files from the folder periodically in a time span of one
                        minute, one hour or one day. All files are scanned beforehad and uploaded only when they are not already inlcuded in the »Digital Asset
                        Management« or have been changed manually by the user.
                    </p>
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/admiralcloud/acsync_02.mp4'
                        preload='metadata'
                        poster='assets/projects/admiralcloud/acsync_02.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
                <div className='category text'>
                    <p>
                        The »Download« folders allow filter options like »Dates«, »Names« or »Types« to download files accordingly for each folder. If changes
                        have been made in the »Digital Asset Management« the files get updated or replaced automatically. As for »Upload« folders, it's possible
                        to check for updates periodically in a time span of one minute, one hour or one day. The »Digital Asset Management« also provides a
                        feature to open specific files automatically in a preferred software like »Adobe Photoshop« or »Microsoft Excel« to edit them easily on
                        the go.
                    </p>
                </div>
                <div className='category video'>
                    <video
                        src='assets/projects/admiralcloud/acsync_03.mp4'
                        preload='metadata'
                        poster='assets/projects/admiralcloud/acsync_03.jpg'
                        controls
                        disablePictureInPicture
                        controlsList='nodownload noremoteplayback'
                    />
                </div>
                <div className='title' data-name='5. Colors'>
                    5. Colors
                </div>
                <div className='text'>
                    <p>
                        We used a dark blue and a soft grey as fundamental colors and introduced a light blue and juicy orange as accent colors. The darker
                        tones kept the interface focused, while the accent colors were used to highlight key actions and states. The font for the application
                        was »Roboto« which ensured an easy readibility.
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
                    <div className='font' style={{ fontFamily: 'Roboto, Helvetica Neue, sans-serif', color: '#19324B' }}>
                        <p>Roboto</p>
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
                <div className='title' data-name='6. Logo'>
                    6. Logo
                </div>
                <div className='text'>
                    <p>
                        The original logo was a combination of the letters »A« and »C« forming a loop as a metaphor for the unlimited possibilities of the
                        »Digital Asset Management«.
                    </p>
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/logo_01.jpg' />
                </div>
                <div className='text'>
                    <p>
                        We wanted to modernize the logo to improve readibility. In this way, both letters should be clearly legible and the overall look
                        appearing and straightforward. I tried different color palettes and played around with different shapes.
                    </p>
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/logo_02.jpg' />
                </div>
                <div className='text'>
                    <p>
                        We decided to go with the most simple approach and created a colorful and flat version of the logo. This has enabled us to use the logo
                        for various purposes, be it marketing brochures, the website or product branding.
                    </p>
                </div>
                <div className='image'>
                    <img src='assets/projects/admiralcloud/logo_03.jpg' />
                </div>
                <div className='title' data-name='7. Infographics'>
                    7. Infographics
                </div>
                <div className='text'>
                    <p>
                        I animated several infographics to illustrate the different features of the application. All the individual graphics were used
                        throughout the website to offer a quick understanding of the product.
                    </p>
                </div>
                <Gallery>
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
            </div>
        );
    }
}
