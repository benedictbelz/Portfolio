import * as React from 'react';
import { Menu } from '../../../components/menu/menu';

export class Website extends React.Component<{}, {}> {
    render() {
        return (
            <div className='wrapper'>
                <Menu />
                <div className='category information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Personal Website</p>
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
                        <p className='uppercase'>Technology</p>
                        <p>React</p>
                        <p>TypeScript</p>
                        <p>ThreeJS</p>
                    </div>
                </div>
                <div className='category image'>
                    <img src='assets/projects/website/media.png' />
                </div>
                <div className='category title'>1. Introduction</div>
                <div className='category text'>
                    <p>
                        It can be always a big challenge to create a personal portfolio. In the worst case, you are chasing for perfection and end up in a
                        circle of frustration. But the process is likewise about exploration and discovering new possibilities. Therefore, it can be a very
                        creative experience. I tried to keep my portfolio minimalistic and aesthetic, but also focused on the latest web technologies and
                        usability.
                    </p>
                </div>
                <div className='category title'>2. Development</div>
                <div className='category text'>
                    <p>
                        On the technical side, I chose TypeScript to keep the codebase reliable and maintainable as it grew. The application is built as a
                        single page application with React, where navigation is handled through a global state rather than a traditional router. Each page is
                        always present in the DOM and slides in or out via SCSS transforms. One of the bigger challenges was getting these transitions to behave
                        consistently across different browsers, since subtle differences in how transforms and stacking contexts are handled can easily break
                        the flow. Making the layout responsive and stable across devices added another layer of complexity, but ultimately resulted in a
                        codebase I am satisfied with.
                    </p>
                </div>
                <div className='category title'>3. Logo</div>
                <div className='category text'>
                    <p>
                        I strived for a straightforward logo design which combined my initial letters and came up with the concept of negative space. In this
                        case, the design would reveal two distinct versions based on the chosen background. This idea of duality carried over into the whole
                        visual language of the website. All other elements were styled in a similar fashion and wherever clarity was required, a single color
                        was sufficient. For the welcome screen, the logo was additionally modelled in 3D and brought to life using ThreeJS.
                    </p>
                </div>
                <div className='category image'>
                    <img src='assets/projects/website/logo.jpg' />
                </div>
                <div className='category title'>4. Colors</div>
                <div className='category text'>
                    <p>
                        I used a brighter black to soften the hard contrast between both opposites. Furthermore, I used a monochrome palette, so the focus would
                        rest for the most part on the portrayed works themselves. Finally, I went with »Helvetica« because of its simplicity which blended in
                        the whole visual concept.
                    </p>
                </div>
                <div className='category design'>
                    <div className='color'>
                        <div style={{ color: '#FFFFFF', background: '#141414' }}>
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
            </div>
        );
    }
}
