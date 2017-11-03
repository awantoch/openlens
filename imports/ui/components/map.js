import React, {Component} from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Modal from "./markerModal";

export class MapView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeMarker: {},
            selectedPlace: {},
            markerModal: false,
            newPointsModal: false,
            newLensModal: false,
            modalData:{},
            currentPos: false,
            isEditMode: false,
            currentLens:{}
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.mapClicked = this.mapClicked.bind(this);
        this.createNewLens = this.createNewLens.bind(this)
    }

    mapClicked(mapProps, map, clickEvent) {
        var position = clickEvent.latLng;
        var latLng = [position.lat(), position.lng()];
        this.setState({currentPos: latLng})
    }

    onMarkerClick(data) {
        this.openModal(data, "markerModal");
        $('#MarkerModal').modal('open');
    }

    submitNewLens(){
        Meteor.call('lens.create', $("#newLens").val(), (error, result) => {
            console.log(result);
            this.setState({currentLens: result})
        });
    }

    submitNewPoint(){
        var currentPos = this.state.currentPos;
        Meteor.call('lens.addPoint')
    }

    addPoint(){
        this.openModal({}, "newPointsModal");
        $('#MarkerModal').modal('open');
    }

    openModal(data, modalName){

        console.log(modalName);
        switch (modalName) {
            case "markerModal":
                this.setState({modalData: data, markerModal: !this.state.markerModal});
                break;
            case "newLensModal":
                console.log("newLensModal");
                this.setState({modalData: {}, newLensModal: !this.state.newLensModal});
                break;
            case "newPointsModal":
                this.setState({modalData: {}, newPointsModal: !this.state.newPointsModal});
                break;
        }
        console.log(this.state.newLensModal);
    }

    closeModal(modalName){
        switch (modalName) {
            case "markerModal":
                this.setState({newLensModal: false});
                break;
            case "newLensModal":
                this.setState({newLensModal: false});
                break;
            case "newPointsModal":
                this.setState({newPointsModal: false});
                break;
        }
    }

    currentClick(){
        if(this.state.currentPos){
            return <Marker
                           onClick={this.addPoint.bind(this)}
                           title={"Current Click"}
                           name={"Current Click"}
                           position={{lat: this.state.currentPos[0], lng: this.state.currentPos[1]}} />
        }
    }

    toggleEditor(){
        this.setState({isEditMode: !this.state.isEditMode});
    }

    createNewLens(){
        this.openModal({}, "newLensModal");
    }

    render() {

        const style = {
            width: '100%',
            height: '100%'
        };

        const {pois} = this.props;
        const isEditMode = this.state.isEditMode === true;

        if(!this.state.isEditMode){
            return (
                <div>
                    <div id="toggleEditor" onClick={this.toggleEditor.bind(this)}><i className="fa fa-plus-square" aria-hidden="true"/></div>
                    <Modal data={this.state.modalData} isOpen={this.state.markerModal} onClose={() => this.closeModal("markerModal")}>
                        <h1>Clicked Point of Interest</h1>
                    </Modal>
                    <Map
                         google={this.props.google}
                         style={style}
                         initialCenter={{
                             lat: 40.258642,
                             lng: -76.878926
                         }}
                         zoom={18}
                         mapType={"Satellite"}
                         onClick={this.mapClicked}
                    >
                        {pois.map((poi)=>{
                            return <Marker key={poi.lat+poi.long}
                                           onClick={this.onMarkerClick.bind(this, poi)}
                                           title={poi.name}
                                           name={poi.name}
                                           position={{lat: poi.lat, lng: poi.long}} />
                        })}

                    </Map>
                </div>
            );
        }else{
            return (
                <div>
                    <div id="toggleEditor" onClick={this.toggleEditor.bind(this)}><i className="fa fa-plus-square" aria-hidden="true"/></div>
                    <div id="createLens" onClick={this.createNewLens}><i className="fa fa-globe" aria-hidden="true"/></div>
                    <Modal isOpen={this.state.newLensModal} onClose={() => this.closeModal("newLensModal")}>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="newLens" type="text" className="validate"/>
                                        <label htmlFor="newLens">Create a new Lens</label>
                                    </div>
                                    <a onClick={this.submitNewLens.bind(this)} className="waves-effect waves-light btn inline-button">Create</a>
                                </div>
                            </form>
                        </div>
                    </Modal>
                    <Modal isOpen={this.state.newPointsModal} onClose={() => this.closeModal("newPointsModal")}>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="newPoint" type="text" className="validate"/>
                                        <label htmlFor="newPoint">Enter a point name.</label>
                                    </div>
                                    <a onClick={this.submitNewPoint.bind(this)} className="waves-effect waves-light btn inline-button">Add</a>
                                </div>
                            </form>
                        </div>
                    </Modal>
                    <Map
                         google={this.props.google}
                         style={style}
                         initialCenter={{
                             lat: 40.258642,
                             lng: -76.878926
                         }}
                         zoom={18}
                         mapType={"Satellite"}
                         onClick={this.mapClicked}
                    >
                        {this.currentClick()}

                    </Map>
                </div>
            );
        }

    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBpsrdbCAoeB_-c7_--ZSl8_D6vXLmh7go"
})(MapView)