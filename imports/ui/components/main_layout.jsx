import React, {Component} from 'react';
import IndexPage from './index.js';
import Camera from '../containers/camera.js'
import Map from './map.js';
import Settings from './settings.js';
import Login from './login.js';
import Register from './register.js';

import {
	BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const Header = () => ({
    render() {
        return (
			<header id="actionBar" className="header white z-depth-1">
				<nav className="white">
					<div className="nav-wrapper">
						<ul>
							<li>
								<Link className="black-text" to="/camera">Camera</Link>
								<Link className="black-text" to="/map">Map</Link>
								<Link className="black-text" to="/settings">Settings</Link>
							</li>
						</ul>

						<ul id="nav-mobile" className="side-nav" />
					</div>
				</nav>
			</header>
        );
    },
});

class MainLayout extends Component {

	constructor(props) {
		super()
	}

	render(){
		return(
		<Router>
				<div id="page-content">
					<Header/>
						<Switch>
							<Route exact name="index" path="/" component={IndexPage} />
							<Route name="camera" path="/camera" component={Camera} />
							<Route name="map" path="/map" component={Map} />
							<Route name="settings" path="/settings" component={Settings} />
							<Route name="login" path="/login" component={Login} />
							<Route name="register" path="/register" component={Register} />
						</Switch>
				</div>
		</Router>
		)
	}
}

export default MainLayout;
