import React from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 40.258944, lng: -76.879448 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: props.latv, lng: props.longv }} />}
    </GoogleMap>
));

class Map extends React.Component {
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
            return (
                <div>
                    <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100vh` }} />}
                        containerElement={<div style={{ height: `100vh` }} />}
                        mapElement={<div style={{ height: `100vh` }} />}
                        latv={this.state.currentLocation.lat}
                        lngv={this.state.currentLocation.lng}
                    />
                </div>
            );
    }

    componentDidMount() {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const coords = pos.coords;
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