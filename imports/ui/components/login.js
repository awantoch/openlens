import React from 'react'
import { Redirect, Link } from 'react-router-dom'

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: null
        };
        this.login = this.login.bind(this);
    }

    login(){
        let email = $("#email").val();
        let password = $("#password").val();
        Meteor.loginWithPassword(email, password, function(err){
            if (!err){
                this.setState({ redirectTo: '/' });
            } else {
                console.log("Nooooo!");
            }
        });
    }

    render(){
        return (
            <div className="row">
                <div className="col s8 offset-s2 m4 offset-m4">
                    <div className="card-panel">
                        <div className="card-content">
                            <div className="row">
                                <form className="col s12">
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
                                        { this.state.redirectTo ?
                                            <Redirect to={{ pathname: this.state.redirectTo }} /> :
                                            (
                                                <div>
                                                    <a onClick={this.login} id="login" className="waves-effect waves-light btn">Login</a>
                                                    <Link to="/register" className="waves-effect waves-light btn">Register</Link>
                                                </div>
                                            )
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login