import * as React from 'react';
import { Browser } from '../../@types/browser';
import './Slider.scss';

interface Props {
    browser: Browser;
    children: React.ReactNode;
}

interface States {
    current: number | null;
    bullets: HTMLElement[] | null;
    images: HTMLElement[] | null;
    length: number | null;
    showTransition: boolean;
}

export class Slider extends React.Component<Props, States> {
    private slider: React.RefObject<HTMLDivElement>;

    constructor(props: any) {
        super(props);
        this.slider = React.createRef();
        this.state = {
            current: 0,
            bullets: null,
            images: null,
            length: React.Children.toArray(this.props.children).length,
            showTransition: false,
        }
    }

    componentDidMount() {
        this.initSlider();
    }

    private initSlider() {
        // IF NO SLIDER RETURN
        if (!this.slider.current) {
            return;
        }
        // GET ELEMENTS
        const bullets = this.slider.current.querySelector('.bullets');
        const images = this.slider.current.querySelector('.images');
        // SET STATE
        this.setState({
            bullets: bullets ? Array.from(bullets.children) as HTMLElement[] : null,
            images: images ? Array.from(images.children) as HTMLElement[] : null
        }, () => {
            this.initDrag();
            this.setBullets();
            this.setImages();
        });
    }

    private initDrag() {
        // IF NO SLIDER RETURN
        if (!this.slider.current) {
            return;
        }
        // GET DRAG ELEMENT
        const drag: HTMLElement = this.slider.current.querySelector('.drag');
        // IF NO DRAG RETURN
        if (!drag) {
            return;
        }
        // DEFINE VARIABLES
        let origin: number;
        let destination: number;
        let isActive = false;
        // DEFINE START
        const start = (position: number) => {
            if (this.state.showTransition) {
                return;
            }
            isActive = true;
            origin = position;
        }
        // DEFINE MOVE
        const move = (position: number) => {
            if (!isActive || this.state.showTransition || !this.state.images) {
                return;
            }
            destination = position - origin;
            const { current, next, previous } = this.getOrder();
            this.state.images[previous].style.left = 'calc(-100% + ' + destination + 'px)';
            this.state.images[current].style.left = destination + 'px';
            this.state.images[next].style.left = 'calc(100% + ' + destination + 'px)';
        }
        // DEFINE END
        const end = () => {
            if (!isActive || this.state.showTransition) {
                return;
            }

            console.log('COMES HERE 1')

            isActive = false;
            if (destination >= 50) {
                console.log('COMES HERE 2')
                this.previousImage();
            } else if (destination <= -50) {
                console.log('COMES HERE 3')
                this.nextImage();
            } else {
                console.log('COMES HERE 4')
                this.currentImage();
            }
        }
        // IF DESKTOP
        if (this.props.browser.device === 'Desktop') {
            drag.addEventListener('mousedown', event => start(event.clientX));
            drag.addEventListener('mousemove', event => move(event.clientX));
            drag.addEventListener('mouseup', () => end());
            drag.addEventListener('mouseout', () => end());
        }
        // IF MOBILE
        else if (this.props.browser.device === 'Mobile') {
            drag.addEventListener('touchstart', event => start(event.touches[0].clientX));
            drag.addEventListener('touchmove', event => move(event.touches[0].clientX));
            drag.addEventListener('touchend', () => end());
        }
    }

    getOrder() {
        // DEFINE ORDER
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

    private getPosition = (position: number) => {
        return (position + this.state.length) % this.state.length;
    };

    setBullets() {
        // IF NO BULLETS RETURN
        if (!this.state.bullets) {
            return;
        }
        // DELETE CLASS NAME FOR ALL BULLETS
        for (let index = 0; index < this.state.length; index++) {
            if (index >= Math.floor(this.state.current/10)*10 && index < (Math.floor(this.state.current/10)*10)+10) {
                this.state.bullets[index].className = 'show';
            } else {
                this.state.bullets[index].className = '';
            }
        }
        // SET BULLETS
        this.state.bullets[this.state.current]?.classList.add('current');
    }

    setImages() {
        // IF NO IMAGES RETURN
        if (!this.state.images) {
            return;
        }
        // GET ORDER
        const { previous, current, next } = this.getOrder();
        // CHANGE IMAGES
        this.state.images[previous].className = 'show';
        this.state.images[previous].style.left = '-100%';
        this.state.images[current].className = 'show';
        this.state.images[current].style.left = '0%';
        this.state.images[next].className = 'show';
        this.state.images[next].style.left = '100%';
    }

    previousImage() {
        // RETURN WHEN TRANSITION IS ACTIVE OR NO IMAGES
        if (this.state.showTransition || !this.state.images) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ showTransition: true }, () => {
            // GET ORDER
            let { current, next, previous } = this.getOrder();
            // CHANGE IMAGES
            this.state.images[previous].style.left = '0%';
            this.state.images[current].style.left = '100%';
            this.state.images[next].style.left = '200%';
            // DECREMENT CURRENT
            current = this.state.current - 1;
            // CHECK BOUNDARY
            if (current < 0) {
                current = current + this.state.length;
            }
            // // SET BULLETS
            setTimeout(() => {
                this.setBullets();
            }, 250);
            // SET IMAGES & DEACTIVATE TRANSITION
            setTimeout(() => {
                this.setState({ current, showTransition: false }, () => this.setImages());
            }, 500);
        });
    }

    currentImage() {
        // RETURN WHEN TRANSITION IS ACTIVE OR NO IMAGES
        if (this.state.showTransition || !this.state.images) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ showTransition: true }, () => {
            // GET ORDER
            let { current, next, previous } = this.getOrder();
            // CHANGE IMAGES
            this.state.images[previous].style.left = '-100%';
            this.state.images[current].style.left = '0%';
            this.state.images[next].style.left = '100%';
            // DEACTIVATE TRANSITION
            setTimeout(() => this.setState({ showTransition: false }), 500);
        });
    }

    nextImage() {
        // RETURN WHEN TRANSITION IS ACTIVE OR NO IMAGES
        if (this.state.showTransition || !this.state.images) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ showTransition: true }, () => {
            // GET ORDER
            let { current, next, previous } = this.getOrder();
            // CHANGE IMAGES
            this.state.images[previous].style.left = '-200%';
            this.state.images[current].style.left = '-100%';
            this.state.images[next].style.left = '0%';
            // INCREMENT CURRENT
            current = this.state.current + 1;
            // CHECK BOUNDARY
            if (current >= this.state.length) {
                current = current - this.state.length;
            }
            // SET BULLETS
            setTimeout(() => {
                this.setBullets();
            }, 250);
            // SET IMAGES & DEACTIVATE TRANSITION
            setTimeout(() => {
                this.setState({ current, showTransition: false }, () => this.setImages());
            }, 500);
        });
    }

	render() {
		return (
            <div ref={this.slider} className={['category', 'slider', this.state.showTransition ? 'transition' : ''].filter(x => x).join(' ')}>
                <div className='drag'/>
                <div className='click'>
                    <div className='left'>
                        <img onClick={() => this.previousImage()} src='assets/interface/sliderLeft.svg'/>
                    </div>
                    <div className='right'>
                        <img onClick={() => this.nextImage()} src='assets/interface/sliderRight.svg'/>
                    </div>
                </div>
                <div className={'bullets'}>
                    {[...Array(this.state.length)].map((bullet, index) => {
                        return <div key={index} data-index={index} className='bullet'/>
                    })}
                </div>
                <div className='images'>
                    {this.props.children}
                </div>
                <div className='placeholder'>
                    {React.Children.toArray(this.props.children)[0]}
                </div>
            </div>
        );
	}
}
