import React, {Component} from 'react'

import {Link} from 'react-router-dom';

class Camera extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const {pois} = this.props;

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
                    <a-entity cursor
                        position="0 0 -1"
                        geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                        material="color: black; shader: flat">
                    </a-entity>
                    {pois.map((poi)=>{
                        return <a-tetrahedron cursor-listener color="#FF926B" radius="5" key={poi.name} gps-Place={"longitude: " + poi.long + "; latitude: " + poi.lat}></a-tetrahedron>
                    })}
                </a-scene>
            </div>
        );
    }

    componentDidMount(){

        AFRAME.registerComponent('cursor-listener', {
          init: function () {
            var lastIndex = -1;
            var COLORS = ['red', 'green', 'blue'];
            this.el.addEventListener('click', function (evt) {
              lastIndex = (lastIndex + 1) % COLORS.length;
              this.setAttribute('material', 'color', COLORS[lastIndex]);
              console.log('I was clicked at: ', evt.detail.intersection.point);
            });
          }})
                
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

}

export default Camera;