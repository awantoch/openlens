import React from 'react'

import {Link} from 'react-router-dom';





const Register = () =>({

    confirm(){

        let user = {
            email: $('#email').val(),
            password: $('#password').val(),
            confirm_password: $('#confirm_password').val(),
            username: $('#user_name').val(),
            firstName: $('#first_name').val(),
            lastName: $('#last_name').val(),
        };

        console.log(user);

        Accounts.createUser(user,function(error){
            if(error){
                alert("Sorry something went wrong.")
            } else {
                this.props.history.push('/camera')
            }
        })
    },

    render(){
        return (
            <div id="register" className="row">
                <div className="col s6 offset-s3">
                    <div className="card-panel">
                        <div className="card-content">
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="first_name" type="text" className="validate"/>
                                                <label htmlFor="first_name">First Name</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="last_name" type="text" className="validate"/>
                                                <label htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="user_name" type="text" className="validate"/>
                                            <label htmlFor="user_name">Username</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="email" type="email" className="validate"/>
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="password" type="password" className="validate"/>
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="confirm_passwordConfirm" type="password" className="validate"/>
                                            <label htmlFor="confirm_password">Confirm Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <a onClick={this.confirm.bind(this)} id="signUp" className="waves-effect waves-light btn">SignUp</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Register