import React from 'react';

const POI = (props) => ({
	render() {
		const coords = "longitude: " + {props.long} + "; latitude: " + {props.lat} + ";"
		return <a-sphere gps-place={coords}></a-sphere>
	}
});

export default POI;