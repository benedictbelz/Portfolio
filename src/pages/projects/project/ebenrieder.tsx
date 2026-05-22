import * as React from 'react';
import { Menu } from '../../../components/menu/menu';

export class Ebenrieder extends React.Component {
    private handleLoad = (event: React.SyntheticEvent<HTMLIFrameElement>) => {
        const element = event.currentTarget;
        setTimeout(() => {
            element.style.opacity = '1';
        }, 2500);
    };

    render() {
        return (
            <div className='wrapper'>
                <Menu />
                <div className='information'>
                    <div>
                        <p className='uppercase'>Project</p>
                        <p>Ebenrieder</p>
                    </div>
                    <div>
                        <p className='uppercase'>Year</p>
                        <p>2025</p>
                    </div>
                    <div>
                        <p className='uppercase'>Role</p>
                        <p>Development</p>
                        <p>UI/UX Design</p>
                    </div>
                    <div>
                        <p className='uppercase'>Collaboration</p>
                        <p>Jasmin & Stefan Hahn</p>
                        <p>Gerwin Schmidt</p>
                    </div>
                    <div>
                        <p className='uppercase'>Technology</p>
                        <p>React</p>
                        <p>TypeScript</p>
                        <p>Zustand</p>
                        <p>NodeJS</p>
                        <p>ExpressJS</p>
                        <p>Sequelize</p>
                    </div>
                </div>
                <div className='image'>
                    <img src='assets/projects/ebenrieder/media.png' />
                </div>
                <div className='title'>1. Introduction</div>
                <div className='text'>
                    »Ebenrieder« is a guest house located in the region of the Allgäu, a short drive from Stötten. The owners Jasmin and Stefan Hahn converted a
                    historic farmhouse into a place for overnight stays and events. It offers five apartments and four rooms, all finished with natural
                    materials to honour the character of the original building. In addition to accommodations, the location runs regular workshops, retreats and
                    dinners. My role was to design and develop the website. The process started with the UI/UX design, followed by the frontend implementation,
                    and later the backend including a custom built CMS. The website is still an ongoing project and continues to evolve in the future.
                </div>
                <div className='title'>2. Design</div>
                <div className='text'>
                    The design process started with developing a general concept for the website. It needed to serve two distinct user groups, guests looking to
                    book a room or attend an event, and organizers wanting to host their own retreats, workshops or seminars. Both groups have different needs,
                    so the structure and navigation had to accommodate both clearly. Based on this concept, a clickable prototype was built to map out the
                    website before development began.
                </div>
                <div className='embed'>
                    <iframe
                        allowFullScreen
                        onLoad={this.handleLoad}
                        src='https://embed.figma.com/proto/8FQvJRRt8tq5OZLvn13bBc/Ebenrieder-%E2%80%93-Konzept?page-id=394%3A88&node-id=394-9765&viewport=172%2C77%2C0.04&scaling=scale-down&content-scaling=fixed&embed-host=share'
                    />
                </div>
                <div className='text'>
                    For the aesthetic, we tried different approaches to find the right look and feel. The goal was to create something accessible, clear and
                    minimalistic, while also reflecting the spirit of the location itself. We experimented with different color palettes and fonts which you can
                    see in the slides below.
                </div>
                <div className='embed'>
                    <iframe
                        allowFullScreen
                        onLoad={this.handleLoad}
                        src='https://embed.figma.com/proto/8FQvJRRt8tq5OZLvn13bBc/Ebenrieder-%E2%80%93-Konzept?page-id=394%3A8096&node-id=423-17742&viewport=145%2C228%2C0.03&scaling=scale-down&content-scaling=fixed&embed-host=share'
                    />
                </div>
                <div className='text'>
                    The artist Gerwin Schmidt developed the logo and came up with watercolor paintings and custom typefaces with a brush lettering aesthetic,
                    which were used for the titles throughout the website. Together with »Futura« as font, and blue and white as primary colors, we found a
                    consistent visual identity. The header and navigation were displayed in inverted colors, so they remained readable regardless of the
                    individual background.
                </div>
                <div className='image'>
                    <img src='assets/projects/ebenrieder/ebenrieder_01.jpg' />
                </div>
                <div className='text'>
                    For the structure, we decided to start with a single page that covered all the key information. The plan is to expand the website with a
                    shop and dedicated pages for each user group in the future as you can see in the slides below.
                </div>
                <div className='embed'>
                    <iframe
                        allowFullScreen
                        onLoad={this.handleLoad}
                        src='https://embed.figma.com/proto/hiayMMNuCY5I7JQDlDyL0R/Ebenrieder-%E2%80%93-Design?page-id=207%3A24&node-id=207-719&viewport=234%2C40%2C0.06&scaling=scale-down&content-scaling=fixed&embed-host=share'
                    />
                </div>
                <div className='title'>3. Frontend</div>
                <div className='text'>
                    The frontend was built with React and TypeScript. Overall the implementation went quite smoothly, but the galleries turned out to be the
                    most time consuming part. The challenge was ensuring consistent behavior across all browsers while keeping the component generic enough to
                    work with any number of images. I integrated Google Maps and styled it accordingly to fit the visual identity of the website. Optional
                    tracking tools were added as well to get a better picture of how many visitors would navigate the website and where they would spend the
                    most time. For state management I went with Zustand, which I extended with some additional logic to avoid unnecessary rerenderings and allow
                    an easy integration with all related components.
                </div>
                <div className='image'>
                    <img src='assets/projects/ebenrieder/ebenrieder_02.jpg' />
                </div>
                <div className='title'>4. Backend</div>
                <div className='image'>
                    <img src='assets/projects/ebenrieder/ebenrieder_03.jpg' />
                </div>
                <div className='text'>
                    The backend runs on NodeJS, ExpressJS and TypeScript, with a PostgreSQL database, accessed via Sequelize. The database covers everything
                    from events, customers and medias to tokens, payments, invoices and settings. The custom built CMS gives access to the backend and handles
                    the daily operations of the business. Media can be transcoded and uploaded directly to the server, and events can be created, edited and
                    managed without relying on external platforms. Through the integration with the payment provider Mollie, guests can pay directly on the
                    website via PayPal, Apple Pay and other common methods.
                </div>
                <div className='image'>
                    <img src='assets/projects/ebenrieder/ebenrieder_05.jpg' />
                </div>
                <div className='text'>
                    Since the use case was very specific and no existing product would have covered the requirements well enough, a custom backend was the
                    logical choice. On top of that, having full ownership means it can be adapted and extended without limitations going forward. The access
                    management is handled through a token based system that handles things like inviting new users and multi factor authentication.
                    Additionally, security was given attention by validating all routes, having a rate limiter in place and assigning specific roles to each
                    user. Furthermore, caching with Redis was added to keep things stable and performant.
                </div>
                <div className='image'>
                    <img src='assets/projects/ebenrieder/ebenrieder_04.jpg' />
                </div>
            </div>
        );
    }
}
