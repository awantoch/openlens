import React from 'react'

import {Link} from 'react-router-dom';

const Map = () =>({
    render(){
        return (
            <div>
                <h1>Map</h1>
                <Link to={"/"}>Home</Link>
            </div>
        );
    }
});

export default Map