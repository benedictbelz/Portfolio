import * as React from 'react';
import './Loader.scss';

interface Props {
    color: 'Black' | 'White';
    isLoading: boolean;
    percentage: number;
}

interface States {
    transition: boolean;
    visible: boolean;
}

export class Loader extends React.Component<Props, States> {
    state: States = {
        transition: true,
        visible: true
    };

    componentDidUpdate(prevProps: any) {
        if (!this.props.isLoading && prevProps.isLoading) {
            setTimeout(() => this.setState({ transition: true, visible: false }), 500);
        } else if (this.props.isLoading && !prevProps.isLoading) {
            this.setState({ transition: false, visible: true });
        }
    }

    render() {
        return (
            <div
                className={[
                    'loader',
                    this.props.color === 'Black' ? 'black' : 'white',
                    this.state.transition ? 'transition' : '',
                    this.state.visible ? 'show' : ''
                ]
                    .filter(x => x)
                    .join(' ')}
            >
                <div className='loaderCircle'></div>
                <div className='loaderPercentage'>{this.props.percentage}%</div>
            </div>
        );
    }
}
