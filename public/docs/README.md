

[Github repository](https://github.com/jiyuu-jin/openlens) -- contains videos, docs and code

[App website](http://openlens.world) -- info and link to app


# OpenLens Augmented Reality

[**OpenLens**](http://openlens.world) is an augmented reality platform built for the web, using AR.js, Three.js, a-frame (AR web standard), and React that enables geo-objects, as well as marker based AR for any data -- text, pictures, audio, 360 video portals, you name it. 

The idea is to create an open platform to render data from people, events, and local business into an interactive world where you can share your experiences and create new memories in ways yet to be imagined!


## Lenses

Each data set is a "Lens" that you can add "Points" to. A Point is a piece of data that contains either lat/long coordinates or a marker model (think QR code) attached to media such as text, image, video, etc. 

Users can toggle between Lenses to filter what types of data they want to see, such as local events highlighted by columns of light, historical markers for augmented tours, parks and recreation in the area, as well as being able to point your phone at a restaurant to see its reviews before you go in. Memories with your pup at the park can be stored there to come back to, or shared with others that go there too.  

For geo-objects, the system will render Three.js spheres (by default) where the lat/long is in the world compared to the users location and rotation vectors, Pokémon Go style.

For markers, one can generate a QR-code like image to print onto a sticker or piece of paper that acts as the plane to render a Three.js model onto. This allows you to render portals, walls of text, images, video game characters, and any other 3D model one can imagine. 


## AR and 2D modes

Users can easily switch to a 2D map view to browse the data around them without using the camera as well, and plot out a trip or a tour of a new area based on their desired Lenses.

## Examples/In action

There are a couple videos demonstrating the platform here:
[https://github.com/jiyuu-jin/openlens/tree/master/public/docs/media](https://github.com/jiyuu-jin/openlens/tree/master/public/docs/media)



## Potential use cases

Here are some interesting ways OpenLens can be used:

* Local Events
* Business reviews
* Augmented Tours
* Gamified everything!
* "Dead Drops"
* Explore local parks, leave digital memories to come back to at your favorite trails
* Identify and research historic landmarks
* "Comment" walls on buildings
* AR Graffiti

The list goes on. You can render any 3D model, image, video, etc into OpenLens with ease! Businesses and other entities can access a dashboard to bulk manage Lenses and potentially create "coupon hunts" and other gamified activities to engage the public.


## Software Stack/How does it work?

### For  Geo-based AR
Three.js is leveraged in a way that provides an experience akin to AR.
Here is how we used it:

1) Fetch devices location store it in a buffer variable

	function getCurrentLocation() {

	    gpsWatcher(function(position){
	        Session.set('currentLocation', [position.coords.longitude, position.coords.latitude]);
	        console.log('location set to ' + [position.coords.longitude, position.coords.latitude]);
	    });
	}

	function gpsWatcher(success, error) {

	    if (typeof(error) == 'undefined')
	        error = function(err) { console.warn('ERROR('+err.code+'): '+err.message); };
	
	    if (!("geolocation" in navigator)){
	        error({code: 0, message: 'Geolocation is not supported by your browser'});
	        return;
	    }

    	return navigator.geolocation.watchPosition(success, error, {enableHighAccuracy: true, maximumAge: 0, timeout: 27000});
	}

	getCurrentLocation();

2) Register AFRAME component for attaching Geoposition to Three.js object

	AFRAME.registerComponent('gps-position', {
	
	    watchId: null,
	    zeroCrd: null,
	    crd: null,
	
	    schema: {
	        accuracy: {
	            type: 'int',
	            default: 100
	        },
	        'zero-crd-latitude': {
	            type: 'number',
	            default: NaN
	        },
	        'zero-crd-longitude': {
	            type: 'number',
	            default: NaN
	        }
	    },
	
	    init: function () {
	
	        if(!isNaN(this.data['zero-crd-latitude']) && !isNaN(this.data['zero-crd-longitude'])){
	            this.zeroCrd = {latitude: this.data['zero-crd-latitude'], longitude: this.data['zero-crd-longitude']};
	        }
	
	        this.watchId = this.watchGPS(function(position){
	            this.crd = position.coords;
	            this.updatePosition();
	        }.bind(this));
	
	    },
	
	    watchGPS: gpsWatcher,
	
	    updatePosition: function () {
	
	        if(this.crd.accuracy > this.data.accuracy) return;
	
	        if(!this.zeroCrd) this.zeroCrd = this.crd;
	
	        let p = this.el.getAttribute('position');
	
	        p.x = this.calcMeters(
	            this.zeroCrd,
	            {
	                longitude: this.crd.longitude,
	                latitude: this.zeroCrd.latitude
	            }
	        ) * (
	            this.crd.longitude > this.zeroCrd.longitude
	                ? 1 : -1
	        );
	        p.z = this.calcMeters(
	            this.zeroCrd,
	            {
	                longitude: this.zeroCrd.longitude,
	                latitude: this.crd.latitude
	            }
	        ) * (
	            this.crd.latitude > this.zeroCrd.latitude
	                ? -1 : 1
	        );
	
	        this.el.setAttribute('position', p);
	
	    },
	
	    calcMeters: function(src, dest) {
	        var dlon = THREE.Math.degToRad(dest.longitude - src.longitude);
	        var dlat = THREE.Math.degToRad(dest.latitude - src.latitude);
	
	        var a = (Math.sin(dlat / 2) * Math.sin(dlat / 2)) + Math.cos(THREE.Math.degToRad(src.latitude)) * Math.cos(THREE.Math.degToRad(dest.latitude)) * (Math.sin(dlon / 2) * Math.sin(dlon / 2));
	        var angle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	
	        return angle * 6378160;
	    },
	
	    remove: function() {
	        if(this.watchId) navigator.geolocation.clearWatch(this.watchId);
	        this.watchId = null;
	    }

	});
	
3) Register AFRAME component to attach compass rotation to Three.js object in a similar way

	AFRAME.registerComponent('compass-rotation', {
	
	    lookControls: null,
	    lastTimestamp: 0,
	    heading: null,
	
	
	    schema: {
	        fixTime: {
	            type: 'int',
	            default: 8000
	        },
	        orientationEvent: {
	            type: 'string',
	            default: 'auto'
	        }
	    },
	
	    init: function () {
	
	        if(typeof(this.el.components['look-controls']) == 'undefined') return;
	
	        this.lookControls = this.el.components['look-controls'];
	
	        this.handlerOrientation = this.handlerOrientation.bind(this);
	
	        if(this.data.orientationEvent == 'auto'){
	            if('ondeviceorientationabsolute' in window){
	                this.data.orientationEvent = 'deviceorientationabsolute';
	            }else if('ondeviceorientation' in window){
	                this.data.orientationEvent = 'deviceorientation';
	            }else{
	                this.data.orientationEvent = '';
	                alert('Compass not supported');
	                return;
	            }
	        }
	
	        window.addEventListener(this.data.orientationEvent, this.handlerOrientation, false);
	
	        window.addEventListener('compassneedscalibration', function(event) {
	            alert('Your compass needs calibrating! Wave your device in a figure-eight motion');
	            event.preventDefault();
	        }, true);
	
	    },
	
	    tick: function (time, timeDelta) {
	
	        if(this.heading === null
	            || this.lastTimestamp > (time - this.data.fixTime)) return;
	
	        this.lastTimestamp = time;
	        this.updateRotation();
	
	    },
	
	    calcCompassHeading: function (alpha, beta, gamma) {
	
	        // Convert degrees to radians
	        var alphaRad = alpha * (Math.PI / 180);
	        var betaRad = beta * (Math.PI / 180);
	        var gammaRad = gamma * (Math.PI / 180);
	
	        // Calculate equation components
	        var cA = Math.cos(alphaRad);
	        var sA = Math.sin(alphaRad);
	        var cB = Math.cos(betaRad);
	        var sB = Math.sin(betaRad);
	        var cG = Math.cos(gammaRad);
	        var sG = Math.sin(gammaRad);
	
	        // Calculate A, B, C rotation components
	        var rA = - cA * sG - sA * sB * cG;
	        var rB = - sA * sG + cA * sB * cG;
	        var rC = - cB * cG;
	
	        // Calculate compass heading
	        var compassHeading = Math.atan(rA / rB);
	
	        // Convert from half unit circle to whole unit circle
	        if(rB < 0) {
	            compassHeading += Math.PI;
	        }else if(rA < 0) {
	            compassHeading += 2 * Math.PI;
	        }
	
	        // Convert radians to degrees
	        compassHeading *= 180 / Math.PI;
	
	        return compassHeading;
	    },
	
	    handlerOrientation: function (evt) {
	
	        var heading = null;
	
	        //console.log('device orientation event', evt);
	
	        if(typeof(evt.webkitCompassHeading) != 'undefined'){
	
	            if(evt.webkitCompassAccuracy < 50){
	                heading = evt.webkitCompassHeading;
	            }else{
	                console.warn('webkitCompassAccuracy is evt.webkitCompassAccuracy');
	            }
	
	        }else if(evt.alpha !== null){
	            if(evt.absolute === true || typeof(evt.absolute == 'undefined')) {
	                heading = this.calcCompassHeading(evt.alpha, evt.beta, evt.gamma);
	            }else{
	                console.warn('evt.absolute === false');
	            }
	        }else{
	            console.warn('evt.alpha === null');
	        }
	
	        this.heading = heading;
	
	    },
	
	    updateRotation: function() {
	        var heading = 360 - this.heading
	        var camera_rotation = this.el.getAttribute('rotation').y;
	        var yaw_rotation = THREE.Math.radToDeg(this.lookControls.yawObject.rotation.y);
	
	        var offset = ( heading - ( camera_rotation - yaw_rotation ) ) % 360;
	
	        this.lookControls.yawObject.rotation.y = THREE.Math.degToRad(offset);
	
	    },
	
	    remove: function () {
	        if(this.data.orientationEvent)
	            window.removeEventListener(this.data.orientationEvent, this.handlerOrientation, false);
	    }
	
	});
	
4) Register AFRAME component to pull both together and manipulate Three.js "camera" component

	AFRAME.registerComponent('gps-place', {
	
	    cameraGpsPosition: null,
	    deferredInitInterval: 0,
	
	    schema: {
	        latitude: {
	            type: 'number',
	            default: 0
	        },
	        longitude: {
	            type: 'number',
	            default: 0
	        },
	        cameraSelector: {
	            type: 'string',
	            default: 'a-camera, [camera]'
	        }
	    },
	
	    init: function () {
	        if(this.deferredInit()) return;
	        this.deferredInitInterval = setInterval(this.deferredInit.bind(this), 1000);
	    },
	
	    deferredInit: function () {
	
	        if(!this.cameraGpsPosition){
	            var camera = document.querySelector(this.data.cameraSelector);
	            if(typeof(camera.components['gps-position']) == 'undefined') return;
	            this.cameraGpsPosition = camera.components['gps-position'];
	        }
	
	        if(!this.cameraGpsPosition.zeroCrd) return;
	
	        this.updatePosition();
	
	        clearInterval(this.deferredInitInterval);
	        this.deferredInitInterval = 0;
	
	        return true;
	    },
	
	    updatePosition: function() {
	
	        var p = {x: 0, y: 0, z: 0};
	
	        p.x = this.cameraGpsPosition.calcMeters(
	            this.cameraGpsPosition.zeroCrd,
	            {
	                longitude: this.data.longitude,
	                latitude: this.cameraGpsPosition.zeroCrd.latitude
	            }
	        ) * (
	            this.data.longitude > this.cameraGpsPosition.zeroCrd.longitude
	                ? 1 : -1
	        );
	        p.z = this.cameraGpsPosition.calcMeters(
	            this.cameraGpsPosition.zeroCrd,
	            {
	                longitude: this.cameraGpsPosition.zeroCrd.longitude,
	                latitude: this.data.latitude
	            }
	        ) * (
	            this.data.latitude > this.cameraGpsPosition.zeroCrd.latitude
	                ? -1 : 1
	        );
	
	        this.el.setAttribute('position', p);
	
	    }
	
	
	});
	
5) Create the React components to render the AFRAME/Three.js models into the DOM, with the containers fetching relevant data to be rendered into the scene

	import React, {Component} from 'react'

	import {Link} from 'react-router-dom';
	import Modal from "./markerModal";
	
	class Camera extends Component {
	
	    constructor(props){
	        super(props);
	        this.state = {
	            markerModal: false,
	            markerMode: false,
	            poi: {}
	        };
	        this.onMarkerClick = this.onMarkerClick.bind(this)
	    }
	
	    onMarkerClick(data) {
	        this.setState({poi: data, markerModal: !this.state.markerModal});
	        $('#MarkerModal').modal('open');
	    }
	
	    closeModal(){
	        this.setState({markerModal: false});
	    }
	
	    attachCursorEvents(){
	        const {pois} = this.props;
	        const callModal = this.onMarkerClick;
	
	        AFRAME.registerComponent('cursor-listener', {
	            init: function () {
	                let el = this.el;
	                el.addEventListener('mouseenter', function (evt) {
	                    el.setAttribute('color', 'purple')
	                });
	                el.addEventListener('mouseleave', function (evt) {
	                    el.setAttribute('color', 'green')
	                })
	                el.addEventListener('click', function (evt) {
	                    let poi = _.findWhere(pois, {_id: el.getAttribute('id')});
	                    callModal(poi)
	                })
	            }
	        });
	    }
	
	    markerToggle(){
	        console.log('markermode', this.state.markerMode)
	        this.setState({markerMode: !this.state.markerMode})
	    }
	
	    render(){
	
	        const {pois} = this.props;
	
	        if (!this.state.markerMode){
	
	            return (
	                <div>
	                    <div onClick={this.markerToggle.bind(this)} id="markerToggle"><i className="fa fa-qrcode" aria-hidden="true"/></div>
	                    <Modal comment="true" isOpen={this.state.markerModal} onClose={() => this.closeModal()} loc={this.state.poi.loc && this.state.poi.loc.coordinates}>
	                        <h5 className="header">{this.state.poi.data && this.state.poi.data.name}</h5>
	                        <p>{this.state.poi.data && this.state.poi.data.text}</p>
	                    </Modal>
	                    <div id="location_info">
	                        <div>
	                            coords: <span id="crd_longitude"/>, <span id="crd_latitude"/>
	                            (zero coords: <span id="zero_crd_longitude"/>, <span id="zero_crd_latitude"/>)
	                        </div>
	                        <div>
	                            camera coords: <span id="camera_p_x"/>, <span id="camera_p_z"/>
	                        </div>
	                        <div>
	                            compass heading: <span id="compass_heading"/>,
	                            camera angle: <span id="camera_angle"/>,
	                            yaw angle: <span id="yaw_angle"/>
	                        </div>
	                    </div>
	
	                    <a-scene embedded debugUIEnabled="false" artoolkit='sourceType: webcam;'>
	                        <a-camera id="camera" user-height="1.6" gps-position compass-rotation>
	                            <a-entity Cursor="fuse: true; fuseTimeout: 500"
	                                      Position="0 0 -3"
	                                      Geometry="primitive: ring; radiusInner: 0.03; radiusOuter: 0.04"
	                                      Material="shader: flat">
	                            </a-entity>
	                        </a-camera>
	
	                        {pois ? pois.map((poi)=>{
	                            return <a-sphere id={poi._id} cursor-listener color="#FF926B" radius="4" key={poi._id} gps-Place={"longitude: " + poi.loc.coordinates[0] + "; latitude: " + poi.loc.coordinates[1]}></a-sphere>
	                        }) : null}
	                    </a-scene>
	                </div>
	            );
	
	        }else{
	            return(
	                <div>
	                    <div onClick={this.markerToggle.bind(this)} id="markerToggle"><i className="fa fa-qrcode" aria-hidden="true"/></div>
	                    <a-scene embedded arjs='trackingMethod: best;'>
	                        <a-anchor hit-testing-enabled='true'>
	                            <a-portal-door url='https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' position='0 0 0' scale='0.7 1 0.7' rotation='0 90 0'/>
	                        </a-anchor>
	                        <a-camera-static/>
	                    </a-scene>
	                </div>
	            );
	        }
	
	    }
	
	    componentDidMount(){
	
	        this.attachCursorEvents();
	                
	        let camera = document.getElementById('camera');
	
	        camera.addEventListener('componentchanged', function (evt) {
	            switch(evt.detail.name){
	                case 'rotation':
	                    //console.log('camera rotation changed', evt.detail.newData);
	                    let
	                        compassRotation = camera.components['compass-rotation'],
	                        lookControls = camera.components['look-controls']
	                    ;
	                    camera_angle.innerText = evt.detail.newData.y;
	                    if(lookControls){
	                        yaw_angle.innerText = THREE.Math.radToDeg(lookControls.yawObject.rotation.y);
	                    }
	                    if(compassRotation){
	                        compass_heading.innerText = compassRotation.heading;
	                    }
	                    break;
	                case 'position':
	                    //console.log('camera position changed', evt.detail.newData);
	                    let
	                        gpsPosition = camera.components['gps-position']
	                    ;
	                    camera_p_x.innerText = evt.detail.newData.x;
	                    camera_p_z.innerText = evt.detail.newData.z;
	                    if(gpsPosition){
	                        if(gpsPosition.crd){
	                            crd_longitude.innerText, currentLocation[0] = gpsPosition.crd.longitude;
	                            crd_latitude.innerText, currentLocation[1] = gpsPosition.crd.latitude;
	                        }
	                        if(gpsPosition.zeroCrd){
	                            zero_crd_longitude.innerText, currentLocation[0] = gpsPosition.zeroCrd.longitude;
	                            zero_crd_latitude.innerText, currentLocation[1] = gpsPosition.zeroCrd.latitude;
	                        }
	                    }
	
	                    break;
	            }
	        });
	    }
	
	    componentWillUnmount() {
	        delete AFRAME.components['cursor-listener'];
	    }
	
	    componentWillUpdate() {
	        delete AFRAME.components['cursor-listener'];
	    }
	
	    componentDidUpdate() {
	        this.attachCursorEvents();
	    }
	
	    shouldComponentUpdate(nextProps, nextState) {
	        return !_.isEqual(nextState, this.state)
	        || !_.isEqual(nextProps, this.props);
	    }
	
	}
	
	export default Camera;
	
## For Marker-based AR

The AR.js library is a framework built from a JavaScript-transpiled version of OpenCV, a computer vision library that has been developed since the 90's. We took this and used it in combination with our custom Geo-AR created a 2-in-1 system for AR. 

## As a system

Meteor.js is the full-stack web framework that powers the entire application's backbone. We leveraged Meteor to handle all of the rendering, data management, and session handling. This also enabled us to build a webapp, iOS, and Android app from the same codebase, through Cordova. The result is a ubiquitous AR system that works on many lower-tier devices.

The social aspect of the system enables users and businesses to create new Points on a map as well as hunt for new Markers. This drastically lowers the entry-barrier for AR/VR as the technology stack is all-web.

## Core pieces of code

The system needs all parts to work in order to provide the full AR experience. However, there are parts of the codebase where most of the work is done. Snippets were shown above, but the critical parts of the code can be found in the following areas:

***/client/aframe/aframe-geo.js*** -- this contains the code used to generate the AFRAME components for attaching location and rotation to the Three.js objects

***/imports/ui/containers/**** -- this folder contains the React containers for interacting with the data model/database. These containers fetch the Lenses and Points in real-time and pass the data to the components to be rendered reactively

***/imports/ui/components/**** -- this folder contains the React components that take the data passed to them and dynamically render the models into the scene. These contain the "business" logic as far as when and what to render/derender artifacts.

The rest of the codebase is Meteor.js framework code for bootstrapping and running the application, routing pages, managing user accounts, live queries, etc.