import React, {Component} from 'react'

import {Link} from 'react-router-dom';

class Camera extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const {pois} = this.props;

        const code4pa = 'skins/code4pa2.png';
        const saiyan = 'skins/saiyan.png';

        const styles ={
            position: 'fixed',
            top: 10,
            width: "100%",
            textAlign: "center",
            zIndex: 1,
            color: "white"
        };

        return (
            <div>
                <a-scene embedded artoolkit='sourceType: webcam;'>
                <a-camera id="camera" user-height="1.6" gps-position compass-rotation></a-camera>
                    {pois.map((poi)=>{
                        return <a-sphere key={poi.name} gps-Place={"longitude: " + poi.long + "; latitude: " + poi.lat}></a-sphere>
                    })}
                </a-scene>
            </div>
        );
    }

    componentDidMount(){

    }

}

export default Camera;