import React, {Component} from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapView extends Component {

    constructor(props){
        super(props);
    }

    onMapClicked(){
        console.log("Clicked!")
    }
    render() {

        const style = {
            width: '100%',
            height: '100%'
        };

        const {pois} = this.props;

        return (
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 40.258642,
                    lng: -76.878926
                }}
                zoom={18}
                mapType={"Satellite"}
                onClick={this.onMapClicked}
            >

            {pois.map((poi)=>{
                return <Marker
                    title={poi.name}
                    name={poi.name}
                    position={{lat: poi.lat, lng: poi.long}} />
            })}

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBpsrdbCAoeB_-c7_--ZSl8_D6vXLmh7go"
})(MapView)