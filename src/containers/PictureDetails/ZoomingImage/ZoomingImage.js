import React, { Component } from 'react';
import './ZoomingImage.css';

class ZoomingImage extends Component {
    state = {
        zoomed: false
    };

    toggleZoom = () => {
        this.setState(state => ({ zoomed: !state.zoomed }));
    };

    render() {
        return (
            <img src={this.props.url} alt={this.props.title}
                 onClick={this.toggleZoom} className={this.state.zoomed ? 'zoom' : ''}
            />
        );
    }
}

export default ZoomingImage;