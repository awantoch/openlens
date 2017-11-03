import React, {Component} from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Modal from "./markerModal";

export class MapView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeMarker: {},
            selectedPlace: {},
            modals:{
                newLensModal: false,
                markerModal: false,
            },
            modalData:{},
            currentPos: false,
            isEditMode: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.mapClicked = this.mapClicked.bind(this)
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

    openModal(data, modalName){

        switch (modalName) {
            case "markerModal":
                this.setState({modalData: data, modals: {markerModal: !this.state.markerModal}});
                break;
            case "newLensModal":
                this.setState({modalData: data, modals: {newLensModal: !this.state.newLensModal}});
                break;
        }
    }

    closeModal(modalName){
        switch (modalName) {
            case "markerModal":
                this.setState({modals: {markerModal: false}});
                break;
            case "newLensModal":
                this.setState({modals: {newLensModal: false}});
                break;
        }
    }

    currentClick(){
        if(this.state.currentPos){
            return <Marker
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
                    <Modal data={this.state.modalData} isOpen={this.state.modals.newLensModal} onClose={() => this.closeModal("newLensModal")}>
                        <h1>suhh</h1>
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
                    <div id="toggleEditor" onClick={this.createNewLens.bind(this)}><i className="fa fa-globe" aria-hidden="true"/></div>
                    <Modal isOpen={this.state.modals.newLensModal} onClose={() => this.closeModal("newLensModal")}>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="newLens" type="text" className="validate"/>
                                        <label htmlFor="newLens">Create a new Lens</label>
                                    </div>
                                    <a className="waves-effect waves-light btn inline-button">button</a>
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