import * as React from 'react';

export class AcSync extends React.Component<{}, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>AC Sync</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2021</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Development</p>
                        <p>UX Design</p>
                        <p>UI Design</p>
                    </div>
                    <div>
                        <p className='uppercase'>Collaboration</p>
                        <p>Daniel Züwerink</p>
                        <p>Julius Eckert</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>React</p>
                        <p>Electron</p>
                        <p>TypeScript</p>
                    </div>
                </div>
                <div className='category image'>
                    <img src='assets/projects/acSync/media.png' style={{ borderRadius: 0 }}/>
                </div>
                <div className='category text'>
                    <p>
                        This was a project for the company »AdmiralCloud AG«.
                        Their main product is a »Digital Asset Management« which can be used
                        to store and manage files such as images, movies, audios or documents.
                        Among other things, it enables organizing, finding, editing 
                        and publishing various files from all over the world.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/acSync/client.jpg' style={{ borderRadius: 5 }}/>
                </div>
                <div className='category text'>
                    <p>
                        To provide a better integration we developed »AC Sync«, which synchronizes data 
                        from the »Digital Asset Management« to a desktop device so that customers can
                        access and edit files independently of their network connection. This was developed
                        for MacOS and Windows and works in a way like »Dropbox« which offers custom functionalities
                        like creating »Download« or »Upload« folders.
                    </p>
                </div>
                <div className='category video'>
                    <video src='assets/projects/acSync/acSync_01.mp4' preload='metadata' poster='assets/projects/acSync/acSync_01.jpg' controls disablePictureInPicture controlsList='nodownload noremoteplayback'/>
                </div>
                <div className='category text'>
                    <p>
                        For the user interface design we kept the color palette similar to the »Digital Asset Management«.
                        We used a dark blue and a soft grey as fundamental colors and introduced a light blue
                        and juicy orange as accent colors. Most importantly we established high contrast between all
                        colors and picked »Roboto« to ensure easy readibility.
                    </p>
                </div>
                <div className='category design'>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#19324B' }}>
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
                        <div style={{color: '#FFFFFF', background: '#4BAFFA' }}>
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
                        <div style={{color: '#FFFFFF', background: '#FFAA28' }}>
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
                    <div className='color'>
                        <div style={{color: '#19324B', background: '#E1E6EB' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>656 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>4%</p>
                                <p className='bold'>M</p>
                                <p>2%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>8%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>225</p>
                                <p className='bold'>G</p>
                                <p>230</p>
                                <p className='bold'>B</p>
                                <p>235</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#E1E6EB</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#E5EAEE' }}></div>
                            <div style={{ background: '#E8ECEF' }}></div>
                            <div style={{ background: '#EBEFF2' }}></div>
                            <div style={{ background: '#F2F4F6' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#FF0027' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>185 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>0%</p>
                                <p className='bold'>M</p>
                                <p>100%</p>
                                <p className='bold'>Y</p>
                                <p>85%</p>
                                <p className='bold'>K</p>
                                <p>0%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>255</p>
                                <p className='bold'>G</p>
                                <p>0</p>
                                <p className='bold'>B</p>
                                <p>39</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#FF0027</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#FF2445' }}></div>
                            <div style={{ background: '#FF3857' }}></div>
                            <div style={{ background: '#FF5770' }}></div>
                            <div style={{ background: '#FF8FA0' }}></div>
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
                <div className='category text'>
                    <p>
                        The »Upload« folders allow customizations like »Tags« and »Security Groups«
                        to structure uploaded files accordingly in the »Digital Asset Management«.
                        Futhermore, it's possible to let »AC Sync« upload all files from the folder periodically
                        in a time span of one minute, one hour or one day. All files are scanned beforehad and
                        uploaded only when they are not already inlcuded in the »Digital Asset Management«
                        or have been changed manually by the user.
                    </p>
                </div>
                <div className='category video'>
                    <video src='assets/projects/acSync/acSync_02.mp4' preload='metadata' poster='assets/projects/acSync/acSync_02.jpg' controls disablePictureInPicture controlsList='nodownload noremoteplayback'/>
                </div>
                <div className='category text'>
                    <p>
                        The »Download« folders allow filter options like »Dates«, »Names« or »Types« to download
                        files accordingly for each folder. If changes have been made in the »Digital Asset Management«
                        the files get updated or replaced automatically. As for »Upload« folders, it's possible to check for updates
                        periodically in a time span of one minute, one hour or one day. The »Digital Asset Management« also
                        provides a feature to open specific files automatically in a preferred software like »Adobe Photoshop«
                        or »Microsoft Excel« to edit them easily on the go.
                    </p>
                </div>
                <div className='category video'>
                    <video src='assets/projects/acSync/acSync_03.mp4' preload='metadata' poster='assets/projects/acSync/acSync_03.jpg' controls disablePictureInPicture controlsList='nodownload noremoteplayback'/>
                </div>
            </div>
        );
    }
}
