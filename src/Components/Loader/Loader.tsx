import * as React from 'react';
import './Loader.scss';

interface Props {
    color: 'black' | 'white';
    loading: boolean;
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
        if (!this.props.loading && prevProps.loading) {
            setTimeout(() => this.setState({ transition: true, visible: false }), 500);
        } else if (this.props.loading && !prevProps.loading) {
            this.setState({ transition: false, visible: true });
        }
    }

    render() {
        return (
            <div className={['loader', this.props.color, this.state.transition ? 'transition' : '', this.state.visible ? 'show' : ''].filter(x => x).join(' ')}>
                <div className='loaderCircle'></div>
                <div className='loaderPercentage'>{this.props.percentage}%</div>
            </div>
        );
    }
}
