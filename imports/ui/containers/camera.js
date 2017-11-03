import React from 'react';
import {composeWithTracker} from 'react-komposer';
import Camera from '../components/camera.js';

const composer = (props, onData) => {
    const pois = [
        {
            name: 'Harrisburg University',
            lat: '40.261811',
            long: '-76.880295'
        },
        {
            name: '2',
            lat: '40.258458',
            long: '-76.879980'
        },
        {
            name: '3',
            lat: '40.258373',
            long: '-76.877753'
        },
        {
            name: '4',
            lat: '40.259832',
            long: '-76.880817'
        }
    ];
        onData(null, {pois});
};

export default composeWithTracker(composer)(Camera);