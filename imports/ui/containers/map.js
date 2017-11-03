import React from 'react';
import {composeWithTracker} from 'react-komposer';
import MapView from '../components/map.js';

const composer = (props, onData) => {
    if (Meteor.subscribe('points').ready()) {
        const loc = currentLocation.slice(0);
        const pois = Points.find({loc: { $near: {
                                           $geometry: {
                                              type: "Point" ,
                                              coordinates: [ loc[0] , loc[1] ]
                                           },
                                           $maxDistance: 1000
                                         }
                                       }}, {limit: 75}).fetch();
        onData(null, {pois});
    }
};

export default composeWithTracker(composer)(MapView);