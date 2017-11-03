import React from 'react';
import {composeWithTracker} from 'react-komposer';
import Camera from '../components/camera.js';
import {Points} from '/lib/collections';

const composer = (props, onData) => {
    if (Meteor.subscribe('points').ready()) {
        const pois = Points.find({}, {limit: 50}).fetch();
        onData(null, {pois});
    }
};

export default composeWithTracker(composer)(Camera);