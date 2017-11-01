import React from 'react'

import {Link} from 'react-router-dom';

const Login = () =>({
    render(){
        return (
            <div>
                <h1>Login</h1>
                <Link to={"/register"}>Register</Link>
            </div>
        );
    }
});

export default Login