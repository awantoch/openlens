import React, {Component} from 'react';

class POI extends Component {
	constructor(props) {
	    super(props);
	}

	render() {
		const {lat, long} = this.props;
		const coords = "longitude: " + long + "; latitude: " + lat;
		return <a-sphere gps-place={coords}></a-sphere>
	}
}

export default POI;