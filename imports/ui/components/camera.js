import React from 'react'

import {Link} from 'react-router-dom';

const Camera = () =>({
    render(){
        const code4pa = 'skins/code4pa2.png';
        const saiyan = 'skins/saiyan.png';

        const styles ={
            position: 'fixed',
            top: 10,
            width: "100%",
            textAlign: "center",
            zIndex: 1,
            color: "white"
        };

        function createMarkup() {
            return {__html: " <a-scene embedded artoolkit=\'sourceType: webcam;\'> \
                                <a-camera id=\"camera\" user-height=\"1.6\" gps-position compass-rotation></a-camera> \
                                <a-sphere gps-place=\"longitude: -76.880295; latitude: 40.261811\"></a-sphere> \
                                <a-sphere gps-place=\"longitude: -76.879980; latitude: 40.258458\"></a-sphere> \
                                <a-sphere gps-place=\"longitude: -76.877753; latitude: 40.258373\"></a-sphere> \
                                <a-sphere gps-place=\"longitude: -76.880817; latitude: 40.259832\"></a-sphere> \
                                <a-sphere gps-place=\"longitude: -76.881140; latitude: 40.260634\"></a-sphere> \
                               <a-sphere gps-place=\"longitude: -76.882112; latitude: 40.259533\"></a-sphere> \
                               <a-sphere gps-place=\"longitude: -76.882837; latitude: 40.260404\"></a-sphere> \
                            </a-scene>"};
        }

        return (
            <div>
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

                <div dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        );
    },

    componentDidMount(){
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

            watchGPS: function (success, error) {

                if(typeof(error) == 'undefined')
                    error = function(err) { console.warn('ERROR('+err.code+'): '+err.message); };

                if (!("geolocation" in navigator)){
                    error({code: 0, message: 'Geolocation is not supported by your browser'});
                    return;
                }

                return navigator.geolocation.watchPosition(success, error, {enableHighAccuracy: true, maximumAge: 0, timeout: 27000});
            },

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


        AFRAME.registerComponent('compass-rotation', {

            lookControls: null,
            lastTimestamp: 0,
            heading: null,


            schema: {
                fixTime: {
                    type: 'int',
                    default: 2000
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

                /*
                camera.components["look-controls"].yawObject.rotation.y = THREE.Math.degToRad(
                    (
                        360
                        - camera.components["compass-rotation"].heading
                        - (
                            camera.getAttribute('rotation').y
                            - THREE.Math.radToDeg(camera.components["look-controls"].yawObject.rotation.y)
                        )
                    )
                    % 360
                )
                */


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

        var camera = document.getElementById('camera');

        camera.addEventListener('componentchanged', function (evt) {
            switch(evt.detail.name){
                case 'rotation':
                    //console.log('camera rotation changed', evt.detail.newData);
                    var
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
                    var
                        gpsPosition = camera.components['gps-position']
                    ;
                    camera_p_x.innerText = evt.detail.newData.x;
                    camera_p_z.innerText = evt.detail.newData.z;
                    if(gpsPosition){
                        if(gpsPosition.crd){
                            crd_longitude.innerText = gpsPosition.crd.longitude;
                            crd_latitude.innerText = gpsPosition.crd.latitude;
                        }
                        if(gpsPosition.zeroCrd){
                            zero_crd_longitude.innerText = gpsPosition.zeroCrd.longitude;
                            zero_crd_latitude.innerText = gpsPosition.zeroCrd.latitude;
                        }
                    }

                    break;
            }
        });
    }

});

export default Camera