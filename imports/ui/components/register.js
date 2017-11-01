import React from 'react'

import {Link} from 'react-router-dom';

const Register = () =>({
    render(){
        return (
            <div>
                <h1>Register</h1>
                <Link to={"/"}>Home</Link>
            </div>
        );
    }
});

export default Register