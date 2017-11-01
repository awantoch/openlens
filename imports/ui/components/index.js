import React from 'react'

import {Link} from 'react-router-dom';
import 'aframe-react';


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

                <a-scene embedded artoolkit='sourceType: webcam;'>

                    <a-camera id="camera" user-height="1.6" gps-position compass-rotation/>

                    <a-sphere gps-place="longitude: -76.880295; latitude: 40.261811"/>
                    <a-sphere gps-place="longitude: -76.879980; latitude: 40.258458"/>
                    <a-sphere gps-place="longitude: -76.877753; latitude: 40.258373"/>
                    <a-sphere gps-place="longitude: -76.880817; latitude: 40.259832"/>
                    <a-sphere gps-place="longitude: -76.881140; latitude: 40.260634"/>
                    <a-sphere gps-place="longitude: -76.882112; latitude: 40.259533"/>
                    <a-sphere gps-place="longitude: -76.882837; latitude: 40.260404"/>

                </a-scene>
            </div>
        );
    },

    componentDidMount(){
    }

});

export default IndexPage