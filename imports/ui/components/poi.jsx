import React from 'react';

const POI = (props) => ({
	render() {
		return <a-sphere gps-place="longitude: " + {props.long} + "; latitude: " + {props.lat} + ";"></a-sphere>
	}
});

export default POI;