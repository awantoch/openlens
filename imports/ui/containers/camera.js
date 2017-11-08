import React from 'react';
import {composeWithTracker} from 'react-komposer';
import Camera from '../components/camera.js';
import {Points} from '/lib/collections';

const composer = (props, onData) => {
    if (Meteor.subscribe('points', Session.get('currentLocation')).ready()) {
        const pois = Points.find({'lensId': Session.get('navLens') || 'historical'}).fetch();
        console.log(pois, Session.get('navLens'))
        onData(null, {pois});
    }
};

export default composeWithTracker(composer)(Camera);