import React, {Component} from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 40.258944, lng: -76.879448 }}
        mapTypeId={'satellite'}
    >
        {props.isMarkerShown && <Marker position={{ lat: props.coords.lat, lng: props.coords.lng }} />}
    </GoogleMap>
));

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: {
                lat: -76,
                lng: 30
            }
        }
    }
    render(){
        console.log(this.state.currentLocation);
            return (
                <div>
                    <MapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBpsrdbCAoeB_-c7_--ZSl8_D6vXLmh7go&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100vh` }} />}
                        containerElement={<div style={{ height: `100vh` }} />}
                        mapElement={<div style={{ height: `100vh` }} />}
                        coords={this.state.currentLocation}
                    />
                </div>
            );
    }

    componentDidMount() {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const coords = pos.coords;
                    console.log(coords.latitude);
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    })
                })
            }
        }
}

export default Map