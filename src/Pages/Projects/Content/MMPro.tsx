import * as React from 'react';

export class MMPro extends React.Component<{}, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>MMPro Media AG</p>
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
                        <p>Eike Janowski</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>JavaScript</p>
                        <p>WordPress</p>
                    </div>
                </div>
                <div className='category image'>
                    <img src='assets/projects/mmpro/media.png' style={{ borderRadius: 0 }}/>
                </div>
                <div className='category text'>
                    <p>
                        This website was a project for the film production company »MMPro Media AG«.
                        Their service offers corporate films across Germany and around the world with
                        1.400 film crews in 126 countries.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/mmpro/logo.jpg'/>
                </div>
                <div className='category text'>
                    <p>
                        The logo is simple and straightforward and usually combined with triangular planes in a transparent blue color.
                        The frequently presented world map represents the global reach of the company.
                    </p>
                </div>
                <div className='category video'>
                    <video src='assets/projects/mmpro/mmpro.mp4' autoPlay loop muted disablePictureInPicture playsInline></video>
                </div>
                <div className='category text'>
                    <p>
                        For the homepage we designed an animation that invites the user to discover all different fields of expertise.
                        In this case, the design is kept clear and easily understandable.
                    </p>
                </div>
                <div className='category design'>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#1488CA' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>7689 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>80%</p>
                                <p className='bold'>M</p>
                                <p>35%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>0%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>30</p>
                                <p className='bold'>G</p>
                                <p>140</p>
                                <p className='bold'>B</p>
                                <p>205</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#1488CA</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#3599D1' }}></div>
                            <div style={{ background: '#48A2D6' }}></div>
                            <div style={{ background: '#64B0DC' }}></div>
                            <div style={{ background: '#98CBE8' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#544F4F' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>Black 7 C</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>0%</p>
                                <p className='bold'>M</p>
                                <p>0%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>92%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>65</p>
                                <p className='bold'>G</p>
                                <p>60</p>
                                <p className='bold'>B</p>
                                <p>60</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#544F4F</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#6C6868' }}></div>
                            <div style={{ background: '#7A7676' }}></div>
                            <div style={{ background: '#8E8b8b' }}></div>
                            <div style={{ background: '#B4B2B2' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='font' style={{ fontFamily: 'Nunito Sans, Helvetica Neue, sans-serif', color: '#544F4F' }}>
                        <p>Nunito Sans</p>
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
                        The fundamental colors consist of a soft black and white with an additional blue accent.
                        The font »Nunito Sans« is clear and  well-readable and emphasizes the restrained design.
                        The menu is embedded on all pages and allows an easy navigation.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/mmpro/mmpro_01.jpg'/>
                </div>
            </div>
        );
    }
}
