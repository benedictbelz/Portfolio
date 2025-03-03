import * as React from 'react';

export class PersonalWebsite extends React.Component<{}, {}> {
    render() {
        return (
            <div className='wrapper'>
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Personal Website</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2019</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Development</p>
                        <p>UX Design</p>
                        <p>UI Design</p>
                    </div>
                </div>
                <div className='category image'>
                    <img src='assets/projects/personalWebsite/media.png' style={{ borderRadius: 0 }}/>
                </div>
                <div className='category text'>
                    <p>
                        It can be always a big challenge to create a personal portfolio.
                        In the worst case, you are chasing for perfection and end up in a circle of frustration.
                        But the process is likewise about exploration and discovering new possibilities.
                        Therefore, it can be a very creative experience. I tried to keep my portfolio minimalistic and aesthetic,
                        but also focused on the latest web technologies and user-friendliness.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/personalWebsite/logo.jpg'/>
                </div>
                <div className='category text'>
                    <p>
                        I strived for a straightforward logo design which combined my initial letters and
                        came up with the concept of negative space which reoccurred on the whole webpage.
                        In this case, the design would unfold two possible versions based on its chosen background.
                        All other elements were styled similarly to fit the whole presentation.
                        If it was required to retain clarity, I decided to go with one single color.
                    </p>
                </div>
                <div className='category design'>
                    <div className='color'>
                        <div style={{color: '#FFFFFF', background: '#141414' }}>
                            <div>
                                <p className='bold'>Pantone</p>
                                <p>20-0200 TPM</p>
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
                                <p>20</p>
                                <p className='bold'>G</p>
                                <p>20</p>
                                <p className='bold'>B</p>
                                <p>20</p>
                            </div>
                            <div>
                                <p className='bold'>HEX</p>
                                <p>#141414</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#353535' }}></div>
                            <div style={{ background: '#484848' }}></div>
                            <div style={{ background: '#646464' }}></div>
                            <div style={{ background: '#989898' }}></div>
                            <div style={{ background: '#FFFFFF' }}></div>
                        </div>
                    </div>
                    <div className='font' style={{ fontFamily: 'Helvetica Neue, sans-serif', color: '#141414' }}>
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
                        I used a brighter black to soften the hard contrast between both opposites.
                        Furthermore, I used a monochrome palette, so the focus would rest for the most part on the portrayed works themselves.
                        Finally, I went with »Helvetica« because of its simplicity which blended in the whole visual concept.
                    </p>
                </div>
            </div>
        );
    }
}
