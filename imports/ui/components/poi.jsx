import React, {Component} from 'react';

class POI extends Component {
	constructor(props) {
	    super(props);
	}

	createMarkup() {
	    return {__html: "<a-sphere gps-place='longitude: " + this.props.long + "; latitude: " + this.props.lat + "'></a-sphere>" };
	}

	render() {
		return <div dangerouslySetInnerHTML={this.createMarkup()}/>
	}
}

export default POI;