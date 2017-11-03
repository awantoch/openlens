
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

import MainLayout from '../../ui/components/main_layout.jsx';

Meteor.startup(() => {
	currentLocation = [-76.880345, 40.261929];
	aframeRegistered = false;
	function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos)=>{
                	currentLocation[0] = pos.coords.longtitude;
                	currentLocation[1] = pos.coords.latitude;
                	alert('your position', currentLocation)
                }, showError);
            } else { 
                alert("Geolocation is not supported by this browser.");
            }
        }

        function showError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    alert("You must allow Geolocation to use this app, the GPS + Compass data lets us calculate where to render everything.")
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.")
                    break;
                case error.TIMEOUT:
                    alert("The request to get user location timed out.")
                    break;
                case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.")
                    break;
            }
        }

        getLocation();
    render((
        <MainLayout />
    ), document.getElementById('app'));
});