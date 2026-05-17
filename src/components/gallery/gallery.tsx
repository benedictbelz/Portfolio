import * as React from 'react';
import { Browser } from '../../stores/browser';
import './gallery.scss';

interface Props {
    children: React.ReactNode;
}

interface States {
    current: number | null;
    bullets: HTMLElement[] | null;
    images: HTMLElement[] | null;
    length: number | null;
    transition: boolean;
}

export class Gallery extends React.Component<Props, States> {
    private gallery: React.RefObject<HTMLDivElement>;

    constructor(props: any) {
        super(props);
        this.gallery = React.createRef();
        this.state = {
            current: 0,
            bullets: null,
            images: null,
            length: React.Children.toArray(this.props.children).length,
            transition: false
        };
    }

    componentDidMount() {
        this.initGallery();
    }

    private initGallery() {
        // IF NO GALLERY RETURN
        if (!this.gallery.current) {
            return;
        }
        // DEFINE VARIABLES
        const { current } = this.getOrder();
        const bullets = this.gallery.current.querySelector('.galleryBullets');
        const images = this.gallery.current.querySelector('.galleryImages');
        // UPDATE STATE
        this.setState(
            {
                bullets: bullets ? (Array.from(bullets.children) as HTMLElement[]) : null,
                images: images ? (Array.from(images.children) as HTMLElement[]) : null
            },
            () => {
                this.initDrag();
                this.setBullets(current);
                this.setImages();
            }
        );
    }

    private initDrag() {
        // IF NO GALLERY RETURN
        if (!this.gallery.current) {
            return;
        }
        // DEFINE VARIABLES
        let active = false;
        let origin: number;
        let destination: number;
        // DEFINE BROWSER
        const browser = Browser.getState();
        // DEFINE START
        const start = (position: number) => {
            if (this.state.transition) {
                return;
            }
            active = true;
            origin = position;
        };
        // DEFINE MOVE
        const move = (position: number) => {
            if (!active || this.state.transition || !this.state.images) {
                return;
            }
            destination = position - origin;
            const { current, next, previous } = this.getOrder();
            this.state.images[previous].style.left = 'calc(-100% + ' + destination + 'px)';
            this.state.images[current].style.left = destination + 'px';
            this.state.images[next].style.left = 'calc(100% + ' + destination + 'px)';
        };
        // DEFINE END
        const end = () => {
            if (!active || this.state.transition) {
                return;
            }
            active = false;
            if (destination >= 50) {
                this.previousImage();
            } else if (destination <= -50) {
                this.nextImage();
            } else {
                this.currentImage();
            }
        };
        // DEFINE DRAG ELEMENT
        const drag: HTMLElement = this.gallery.current.querySelector('.galleryDrag');
        // IF DESKTOP
        if (drag && browser.device === 'Desktop') {
            drag.addEventListener('mousedown', event => start(event.clientX));
            drag.addEventListener('mousemove', event => move(event.clientX));
            drag.addEventListener('mouseup', () => end());
            drag.addEventListener('mouseout', () => end());
        }
        // IF MOBILE
        else if (drag && browser.device === 'Mobile') {
            drag.addEventListener('touchstart', event => start(event.touches[0].clientX));
            drag.addEventListener('touchmove', event => move(event.touches[0].clientX));
            drag.addEventListener('touchend', () => end());
        }
    }

    private getOrder() {
        // DEFINE VARIABLES
        let current, next, previous;
        // CURRENT IMAGE
        current = this.state.current;
        // PREVIOUS IMAGE
        if (current - 1 < 0) {
            previous = current - 1 + this.state.length;
        } else {
            previous = current - 1;
        }
        // NEXT IMAGE
        if (current + 1 >= this.state.length) {
            next = current + 1 - this.state.length;
        } else {
            next = current + 1;
        }
        // RETURN ORDER
        return { current, next, previous };
    }

    private setBullets(position: number) {
        // IF NO BULLETS RETURN
        if (!this.state.bullets) {
            return;
        }
        // DELETE CLASS NAME FOR ALL BULLETS
        for (let index = 0; index < this.state.length; index++) {
            if (index >= Math.floor(position / 10) * 10 && index < Math.floor(position / 10) * 10 + 10) {
                this.state.bullets[index].className = 'show';
            } else {
                this.state.bullets[index].className = '';
            }
        }
        // UPDATE BULLETS
        this.state.bullets[position].classList.add('current');
    }

    private setImages() {
        // IF NO IMAGES RETURN
        if (!this.state.images) {
            return;
        }
        // DEFINE VARIABLES
        const { previous, current, next } = this.getOrder();
        // UPDATE IMAGES
        this.state.images[previous].className = 'show';
        this.state.images[previous].style.left = '-100%';
        this.state.images[current].className = 'show';
        this.state.images[current].style.left = '0%';
        this.state.images[next].className = 'show';
        this.state.images[next].style.left = '100%';
    }

    private previousImage() {
        // IF NO IMAGES OR TRANSITION IS ACTIVE
        if (!this.state.images || this.state.transition) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ transition: true }, () => {
            // DEFINE VARIABLES
            let { current, next, previous } = this.getOrder();
            // UPDATE IMAGES
            this.state.images[previous].style.left = '0%';
            this.state.images[current].style.left = '100%';
            this.state.images[next].style.left = '200%';
            // DECREMENT CURRENT
            current = this.state.current - 1;
            // CHECK BOUNDARY
            if (current < 0) {
                current = current + this.state.length;
            }
            // UPDATE BULLETS
            setTimeout(() => {
                this.setBullets(current);
            }, 250);
            // DEACTIVATE TRANSITION
            setTimeout(() => {
                this.setState({ current, transition: false }, () => {
                    this.setImages();
                });
            }, 500);
        });
    }

    private currentImage() {
        // IF NO IMAGES OR TRANSITION IS ACTIVE
        if (!this.state.images || this.state.transition) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ transition: true }, () => {
            // DEFINE VARIABLES
            let { current, next, previous } = this.getOrder();
            // UPDATE IMAGES
            this.state.images[previous].style.left = '-100%';
            this.state.images[current].style.left = '0%';
            this.state.images[next].style.left = '100%';
            // DEACTIVATE TRANSITION
            setTimeout(() => this.setState({ transition: false }), 500);
        });
    }

    private nextImage() {
        // RETURN WHEN TRANSITION IS ACTIVE OR NO IMAGES
        if (this.state.transition || !this.state.images) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ transition: true }, () => {
            // DEFINE VARIABLES
            let { current, next, previous } = this.getOrder();
            // UPDATE IMAGES
            this.state.images[previous].style.left = '-200%';
            this.state.images[current].style.left = '-100%';
            this.state.images[next].style.left = '0%';
            // INCREMENT CURRENT
            current = this.state.current + 1;
            // CHECK BOUNDARY
            if (current >= this.state.length) {
                current = current - this.state.length;
            }
            // UPDATE BULLETS
            setTimeout(() => {
                this.setBullets(current);
            }, 250);
            // DEACTIVATE TRANSITION
            setTimeout(() => {
                this.setState({ current, transition: false }, () => {
                    this.setImages();
                });
            }, 500);
        });
    }

    render() {
        return (
            <div ref={this.gallery} className={['category', 'gallery', this.state.transition ? 'transition' : ''].filter(x => x).join(' ')}>
                <div className='galleryDrag' />
                <div className='galleryClick'>
                    <div className='galleryLeft'>
                        <img onClick={() => this.previousImage()} src='assets/interface/sliderLeft.svg' />
                    </div>
                    <div className='galleryRight'>
                        <img onClick={() => this.nextImage()} src='assets/interface/sliderRight.svg' />
                    </div>
                </div>
                <div className={'galleryBullets'}>
                    {[...Array(this.state.length)].map((bullet, index) => {
                        return <div key={index} data-index={index} className='bullet' />;
                    })}
                </div>
                <div className='galleryImages'>{this.props.children}</div>
                <div className='galleryPlaceholder'>{React.Children.toArray(this.props.children)[0]}</div>
            </div>
        );
    }
}
