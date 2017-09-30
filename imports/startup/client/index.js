
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

import MainLayout from '../../ui/components/main_layout.jsx';

Meteor.startup(() => {
    render((
        <MainLayout />
    ), document.getElementById('app'));
});