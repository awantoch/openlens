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

        const pois = [
        {
            name: '1',
            lat: '40.261811',
            long: '-76.880295'
        },
        {
            name: '2',
            lat: '40.258458',
            long: '-76.879980'
        },
        {
            name: '3',
            lat: '40.258373',
            long: '-76.877753'
        },
        {
            name: '4',
            lat: '40.259832',
            long: '-76.880817'
        }
    ];

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

                <a-scene embedded artoolkit='sourceType: webcam;'>
                <a-camera id="camera" user-height="1.6" gps-position compass-rotation></a-camera>
                    {pois.map((poi)=>{
                        return <a-sphere gps-Place={"longitude: " + poi.long + "; latitude: " + poi.lat}></a-sphere>
                    })}
                </a-scene>
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

export default Camera