import React from 'react'

import {Link} from 'react-router-dom';
import {Scene, Entity} from 'aframe-react';
import 'aframe-environment-component';

const IndexPage = () =>({
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

        return (
            <div className="App">

                <div style={styles}>
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

                <Scene embedded artoolkit='sourceType: webcam;'>

                    <a-camera id="camera" user-height="1.6" gps-position compass-rotation/>
                    <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} gps-place="longitude: -76.880295; latitude: 40.261811"/>
                    <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} gps-place="longitude: -76.879980; latitude: 40.258458"/>
                    <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} gps-place="longitude: -76.877753; latitude: 40.258373"/>
                    <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} gps-place="longitude: -76.880817; latitude: 40.259832"/>
                    <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} gps-place="longitude: -76.881140; latitude: 40.260634"/>
                    <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} gps-place="longitude: -76.882112; latitude: 40.259533"/>
                    <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} gps-place="longitude: -76.882837; latitude: 40.260404"/>

                </Scene>
            </div>
        );
    },

    componentDidMount(){
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

export default IndexPage