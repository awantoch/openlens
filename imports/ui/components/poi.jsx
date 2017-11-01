import React from 'react';

const POI = (props) => ({

	const coords = "longitude: " + {props.long} + "; latitude: " + {props.lat} + ";"
	
	render() {
		return <a-sphere gps-place={coords}></a-sphere>
	}
});

export default POI;