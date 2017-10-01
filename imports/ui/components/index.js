import React from 'react'

import {Link} from 'react-router-dom';
import {Entity, Scene} from 'aframe-react';


const IndexPage = () =>({
    render(){
        const code4pa = 'skins/code4pa2.png';
        const saiyan = 'skins/saiyan.png';
        return (
            <div className="App">
                <Scene artoolkit={{sourceType: 'webcam', trackingMethod: 'best'}}>

                    <a-anchor>
                        <a-entity minecraft={`heightMeter: 1; skinUrl: ${code4pa}`} minecraft-head-anim="yes" minecraft-body-anim="hiwave" material='opacity: 0.5' />
                    </a-anchor>
                    <a-camera-static preset="hiro" />
                </Scene>
            </div>
        );
    },

    componentDidMount(){
    }

});

export default IndexPage