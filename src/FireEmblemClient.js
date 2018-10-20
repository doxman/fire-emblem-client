import React, { Component } from 'react';
import map from './map.png';
import './FireEmblemClient.css';

class FireEmblemClient extends Component {
    render() {
        return (
            <div className="FireEmblemClient">
                <h1 className="FireEmblemClient-title">Fire Emblem</h1>
                <div className="FireEmblemClient-map">
                    <img src={map} className="FireEmblemClient-map-image" alt="map"/>
                </div>
            </div>
        );
    }
}

export default FireEmblemClient;
