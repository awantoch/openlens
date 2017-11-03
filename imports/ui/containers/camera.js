import React from 'react';
import {composeWithTracker} from 'react-komposer';
import Camera from '../components/camera.js';
import {Points} from '/lib/collections';

const composer = (props, onData) => {
    if (Meteor.subscribe('points').ready()) {
        const pois = Points.find({loc: { $near: {
                                           $geometry: {
                                              type: "Point" ,
                                              coordinates: [ currentLocation[0] , currentLocation[1] ]
                                           },
                                           $maxDistance: 1000
                                         }
                                       }}, {limit: 75}).fetch();
        onData(null, {pois});
    }
};

export default composeWithTracker(composer)(Camera);