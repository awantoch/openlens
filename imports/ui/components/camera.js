import React, {Component} from 'react'

import {Link} from 'react-router-dom';
import Modal from "./markerModal";

class Camera extends Component {

    constructor(props){
        super(props);
        this.state = {
            markerModal: false,
            modalData:{},
        };
        this.onMarkerClick = this.onMarkerClick.bind(this)
    }

    onMarkerClick(data) {
        this.setState({modalData: data, markerModal: !this.state.markerModal});
        $('#MarkerModal').modal('open');
    }

    closeModal(){
        this.setState({markerModal: false});
    }

    render(){

        const {pois} = this.props;

        return (
            <div>
                <Modal data={this.state.modalData} isOpen={this.state.markerModal} onClose={() => this.closeModal()}/>
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
                    <a-camera id="camera" user-height="1.6" gps-position compass-rotation>
                        <a-entity Cursor="fuse: false"
                            Position="0 0 -3"
                            Geometry="primitive: ring; radiusInner: 0.086; radiusOuter: 0.09"
                            Material="shader: flat">
                        </a-entity>
                    </a-camera>

                    {pois ? pois.map((poi)=>{
                        return <a-tetrahedron id={poi._id} cursor-listener color="#FF926B" radius="3" key={poi._id} gps-Place={"longitude: " + poi.loc.coordinates[0] + "; latitude: " + poi.loc.coordinates[1]}></a-tetrahedron>
                    }) : null}
                </a-scene>
            </div>
        );
    }

    componentDidMount(){

        const {pois} = this.props;
        const callModal = this.onMarkerClick;

        try {
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
                        let poi = _.findWhere(pois, {_id: el.getAttribute('id')})
                        callModal(poi)
                    })
                }
            });
        } catch (Error) {
            // catch when routing tries to reregister
        }
                
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