import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {Points} from '/lib/collections';
import MapView from '../components/map.js';

const composer = (props, onData) => {
    if (Meteor.subscribe('points', Session.get('currentLocation')).ready()) {
        const pois = Points.find({'lensId': Session.get('navLens') || 'historical'}).fetch();
        onData(null, {pois});
    }
};

export default composeWithTracker(composer)(MapView);