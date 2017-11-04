import React from 'react';
import {composeWithTracker} from 'react-komposer';
import SideNav from '../components/sidenav.js';
import {Lenses} from '/lib/collections';

const composer = (props, onData) => {
    if (Meteor.subscribe('lenses').ready()) {
        const lenses = Lenses.find().fetch();
        onData(null, {lenses});
    }
};

export default composeWithTracker(composer)(SideNav);