import React from 'react'

import {Link} from 'react-router-dom';

const Settings = () =>({
    render(){
        return (
            <div>
                <h1>Settings</h1>
                <Link to={"/"}>Home</Link>
            </div>
        );
    }
});

export default Settings