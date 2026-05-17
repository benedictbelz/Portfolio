import * as React from 'react';
import './menu.scss';

interface States {
    active: number;
    items: {
        name: string;
        element: Element;
    }[];
}

export class Menu extends React.Component<{}, States> {
    private container: Element | null = null;
    private navigation: React.RefObject<HTMLDivElement> = React.createRef();
    private buttons: React.RefObject<HTMLButtonElement>[] = [];

    state: States = {
        items: [],
        active: 0
    };

    componentDidMount() {
        this.container = document.querySelector('#projects > .content')
        this.container?.addEventListener('scroll', this.handleScroll);
        this.handleItems();
    }

    componentWillUnmount() {
        this.container?.removeEventListener('scroll', this.handleScroll);
    }

    private handleItems() {
        const elements = document.querySelectorAll('#projects .title[data-name]');
        const items: States['items'] = Array.from(elements).map(item => ({
            name: item.getAttribute('data-name')!,
            element: item
        }));
        this.setState({ items });
    }

    private handleOffset() {
        // DEFINE VARIABLES
        const navigation = this.navigation.current;
        const buttons = this.buttons[this.state.active]?.current;
        // IF NO NAVIGATION OR BUTTONS
        if (!navigation || !buttons) return;
        // DEFINE OFFSET
        const offset = buttons.getBoundingClientRect().left - navigation.getBoundingClientRect().left + navigation.scrollLeft - navigation.clientWidth / 2 + buttons.getBoundingClientRect().width / 2;
        // UPDATE SCROLL
        navigation.scrollTo({ left: offset, behavior: 'smooth' });
    }

    private handleScroll = () => {
        // DEFINE VARIABLES
        let { items } = this.state;
        let active = 0;
        let container = this.container.getBoundingClientRect().top;
        // IF NO ITEMS
        if (!items.length || !this.container) return;
        // GO THROUGH ITEMS
        for (let index = 0; index < items.length; index++) {
            const scroll = items[index].element.getBoundingClientRect().top - container;
            if (scroll <= 150) active = index;
        }
        // UPDATE STATE
        this.setState({ active }, () => this.handleOffset());
    };

    render() {
        // DEFINE VARIABLES
        const { items, active } = this.state;
        // IF NO ITEMS
        if (!items.length) return null;
        // UPDATE BUTTONS
        this.buttons = items.map((_, index) => this.buttons[index] ?? React.createRef());
        // RETURN COMPONENT
        return (
            <div className='menu' ref={this.navigation}>
                {items.map((item, index) => (
                    <button
                        key={index}
                        ref={this.buttons[index]}
                        className={index === active ? 'active' : ''}
                        onClick={() => {
                            if (!this.container) return;
                            const offset = item.element.getBoundingClientRect().top - this.container.getBoundingClientRect().top + this.container.scrollTop - 120;
                            this.container.scrollTo({ top: offset, behavior: 'smooth' });
                        }}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        );
    }
}
