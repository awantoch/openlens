import React, {Component} from 'react';
import IndexPage from './index.js';
import Camera from './camera.js'
import Map from './map.js';
import Settings from './settings.js';
import Login from './login.js';
import Register from './register.js';

import {
	BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class MainLayout extends Component {

	constructor(props) {
		super()
	}

	render(){
		return(
		<Router>
			<div>

				<div id="page-content">
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
