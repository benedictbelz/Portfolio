import * as React from 'react';

export class KeepGoing extends React.Component<{}, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Keep Going</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2017</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Development</p>
                        <p>UX Design</p>
                        <p>UI Design</p>
                    </div>
                    <div>
                        <p className='uppercase'>Collaboration</p>
                        <p>David Panagiotopulos</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>JavaScript</p>
                    </div>
                </div>
                <div className='category image'>
                    <img src='assets/projects/keepGoing/media.png' style={{ borderRadius: 0 }}/>
                </div>
                <div className='category text'>
                    <p>
                        »Keep Going« was developed as a travel blog and included different  posts of countries,
                        travel tips and shopping products. I wanted to create a clear and box-like design 
                        which would match the composition of vintage newspapers.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/keepGoing/logo.gif'/>
                </div>
                <div className='category text'>
                    <p>
                        The logo design transformed into an animation if it was hovered by the user.
                        The wings of the airplane represented the letter »K« while the route formed the letter »G«.
                        I tried to keep the design as readable but at the same time as expressive as possible.
                    </p>
                </div>
                <div className='category design'>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#83C8EA' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>297 U</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>40%</p>
                                <p className='bold'>M</p>
                                <p>13%</p>
                                <p className='bold'>Y</p>
                                <p>0%</p>
                                <p className='bold'>K</p>
                                <p>8%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>131</p>
                                <p className='bold'>G</p>
                                <p>200</p>
                                <p className='bold'>B</p>
                                <p>234</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#83C8EA</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#94D0ED' }}></div>
                            <div style={{ background: '#9ED4EF' }}></div>
                            <div style={{ background: '#ADDBF1' }}></div>
                            <div style={{ background: '#C8E7F6' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#E25A5A' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>P 55-6 U</p>
                            </div>
                            <div>
                                <p className='bold'>C</p>
                                <p>0%</p>
                                <p className='bold'>M</p>
                                <p>53%</p>
                                <p className='bold'>Y</p>
                                <p>53%</p>
                                <p className='bold'>K</p>
                                <p>11%</p>
                            </div>
                            <div>
                                <p className='bold'>R</p>
                                <p>226</p>
                                <p className='bold'>G</p>
                                <p>90</p>
                                <p className='bold'>B</p>
                                <p>90</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#E25A5A</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#E67171' }}></div>
                            <div style={{ background: '#E87E7E' }}></div>
                            <div style={{ background: '#EC9292' }}></div>
                            <div style={{ background: '#F2B6B6' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='font' style={{ fontFamily: 'Helvetica Neue, sans-serif', color: '#000000' }}>
                        <p>Helvetica</p>
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
                        Most of the webpage is held in black and white, but the addition of blue and
                        red pastel colors relieved the monotone look. I decided to use those colors wisely
                        to leave most of the focus on the pictures. The font »Helvetica« required to emphasize the clear appearance.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/keepGoing/keepGoing_01.jpg'/>
                </div>
                <div className='category text'>
                    <p>
                        All pages contained the same navigation and included a search function and a burger menu in case of mobile usage.
                        All blog collections covered links for sharing and were sorted into their individual categories.
                        The User Experience was designed in a straightforward classical approach to avoid unnecessary disorientation.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/keepGoing/keepGoing_02.jpg'/>
                </div>
            </div>
        );
    }
}
