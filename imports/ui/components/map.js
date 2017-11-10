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
            poi: {},
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
        Meteor.call('lens.create', $("#newLens").val(), function(error, result){
            console.log(result);
            Session.set('currentLens', {id: result, name: $("#newLens").val()});
        })
    }

    submitNewPoint(){
        var session = Session.get('currentLens');
        console.log(session);
        Meteor.call('lens.addPoint', session.id, {name: $('#newPoint').val() }, this.state.currentPos[1], this.state.currentPos[0])
    }

    addPoint(){
        this.openModal({}, "newPointsModal");
        $('#MarkerModal').modal('open');
    }

    openModal(data, modalName){

        console.log(modalName);
        switch (modalName) {
            case "markerModal":
                this.setState({poi: data, markerModal: !this.state.markerModal});
                break;
            case "newLensModal":
                console.log("newLensModal");
                this.setState({newLensModal: !this.state.newLensModal});
                break;
            case "newPointsModal":
                this.setState({poi: {}, newPointsModal: !this.state.newPointsModal});
                break;
        }
    }

    closeModal(modalName){
        switch (modalName) {
            case "markerModal":
                this.setState({markerModal: false});
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
        setTimeout(function(){
            $('#MarkerModal').modal('open');
        }, 200);
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
                    <div id="toggleEditor" onClick={this.toggleEditor.bind(this)}><i className="fa fa-globe" aria-hidden="true"/></div>
                    <Modal comment isOpen={this.state.markerModal} onClose={() => this.closeModal("markerModal")} loc={this.state.poi.loc && this.state.poi.loc.coordinates}>
                        <h5>{this.state.poi.data && this.state.poi.data.name}</h5>
                        <p>{this.state.poi.data && this.state.poi.data.text}</p>
                    </Modal>
                    <Map
                         google={this.props.google}
                         style={style}
                         initialCenter={{
                             lat: Session.get("currentLocation")[1],
                             lng: Session.get("currentLocation")[0]
                         }}
                         zoom={18}
                         mapType={"Satellite"}
                         onClick={this.mapClicked}
                    >
                        {pois ? pois.map((poi)=>{
                            return <Marker key={poi._id}
                                           onClick={this.onMarkerClick.bind(this, poi)}
                                           title={poi.data.name}
                                           name={poi.data.name}
                                           position={{lat: poi.loc.coordinates[1], lng: poi.loc.coordinates[0]}} />
                        }) : null}

                    </Map>
                </div>
            );
        }else{
            return (
                <div>
                    <div id="toggleEditor" onClick={this.toggleEditor.bind(this)}><i className="fa fa-globe" aria-hidden="true"/></div>
                    <div id="createLens" onClick={this.createNewLens}><i className="fa fa-plus-square" aria-hidden="true"/></div>
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
                             lat: Session.get("currentLocation")[1],
                             lng: Session.get("currentLocation")[0]
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

    componentWillMount(){
        if(Session.get('currentLens')){
            this.setState({currentLens: Session.get('currentLens')});
            console.log(Session.get('currentLens'))
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !_.isEqual(nextState, this.state)
        || !_.isEqual(nextProps, this.props);
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBpsrdbCAoeB_-c7_--ZSl8_D6vXLmh7go"
})(MapView)