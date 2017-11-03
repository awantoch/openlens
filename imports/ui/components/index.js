import React from 'react'

import {Link} from 'react-router-dom';

const IndexPage = () =>({
    render(){
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <div className="home-banner z-depth-5">
                <center><h1 className="grey-text text-lighten-4 home-text">Open Lens</h1></center>
                    <i className="fa fa-arrow-circle-o-up home-button" aria-hidden="true"/>
                </div>
            </div>
        );
    }
});

export default IndexPage