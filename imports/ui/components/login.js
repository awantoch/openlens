import React from 'react'
import { Redirect } from 'react-router-dom'

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: null
        };
        this.clickhandler = this.clickhandler.bind(this);
    }

    clickhandler(){
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
                <div className="col s6 offset-s3">
                    <div className="card-panel">
                        <div className="card-content">
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="email" type="email" className="validate"/>
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="password" type="password" className="validate"/>
                                            <label for="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        { this.state.redirectTo ?
                                            <Redirect to={{ pathname: this.state.redirectTo }} /> :
                                            (
                                                <div>
                                                    ..
                                                    <a onClick={this.clickhandler} id="login" className="waves-effect waves-light btn">Login</a>
                                                    ..
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