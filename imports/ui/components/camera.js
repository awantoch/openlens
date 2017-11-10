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
        this.setState({markerMode: !this.markerMode})
    }

    render(){

        const {pois} = this.props;



        if (!this.state.markerMode){

            return (
                <div>
                    <div onClick={this.markerToggle.bind(this)} id="markerToggle"><i className="fa fa-qrcode" aria-hidden="true"/></div>
                    <Modal comment={true} isOpen={this.state.markerModal} onClose={() => this.closeModal()} loc={this.state.poi.loc && this.state.poi.loc.coordinates}>
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
                    <a-scene embedded arjs='trackingMethod: best;'>
                        <a-anchor hit-testing-enabled='true'>
                            <a-portal-door url='https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg' position='0 0 0' scale='0.7 1 0.7' rotation='0 90 0'/>
                        </a-anchor>
                        <a-camera-static/>
                    </a-scene>
                </div>
            )
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