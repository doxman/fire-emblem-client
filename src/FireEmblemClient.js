import React, { Component } from 'react';
import './FireEmblemClient.css';

class FireEmblemClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapImageSrc: null,
        };
    }

    componentDidMount() {
        const headers = new Headers();
        headers.append("Content-Type", "image/png");
        const mapRequest = new Request("http://localhost:8888/map", {
            headers,
        });
        fetch(mapRequest).then((response) => response.blob()).then((blob) => {
            const mapImageSrc = URL.createObjectURL(blob);
            this.setState({
                mapImageSrc,
            });
        });
    }

    render() {
        const {mapImageSrc} = this.state;

        return (
            <div className="FireEmblemClient">
                <h1 className="FireEmblemClient-title">Fire Emblem</h1>
                <div className="FireEmblemClient-map">
                    {mapImageSrc == null ? null :
                        <img src={mapImageSrc} className="FireEmblemClient-map-image" alt="map"/>
                    }
                </div>
            </div>
        );
    }
}

export default FireEmblemClient;
