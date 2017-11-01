import React, {Component} from 'react';
import IndexPage from './index.js';
import Camera from './camera.js'
import Map from './map.js';
import Settings from './settings.js';
import Login from './login.js';
import Register from './register.js';

import {
	BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const Header = () =>({

	render(){
		return(
			<div>
				<nav className="white" role="navigation">
					<div className="nav-wrapper container">
						<ul className="right hide-on-med-and-down">
							<li><Link className="black-text" to="/login/">Login</Link></li>
						</ul>

						<ul id="nav-mobile" className="side-nav">
							<li><Link className="black-text" to="/login/" href="#">Login</Link></li>
						</ul>
						<a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
					</div>
				</nav>
			</div>
		)
	},

	componentDidMount(){
	}

});

class MainLayout extends Component {

	constructor(props) {
		super()
	}

	render(){
		return(
		<Router>
			<div>

				<div id="page-content" className="thebackground">
						<Switch>
							<Route exact name="index" path="/" component={IndexPage} />
							<Route name="camera" path="/camera" component={Camera} />
							<Route name="map" path="/map" component={Map} />
							<Route name="settings" path="/settings" component={Settings} />
							<Route name="login" path="/login" component={Login} />
							<Route name="register" path="/register" component={Register} />
						</Switch>
				</div>
			</div>
		</Router>
		)
	}
}

export default MainLayout;
