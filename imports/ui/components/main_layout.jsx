import React, {Component} from 'react';
import IndexPage from './index.js';
import SideNav from '../containers/sidenav.js'
import Camera from '../containers/camera.js'
import Map from '../containers/map.js';
import Settings from './settings.js';
import Login from './login.js';
import Register from './register.js';
import MarkerModal from './markerModal'

import {
	BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const Header = () => ({
    render() {
        return (
				<div>
					<div id="action-bar">
						<ul>
							<li>
								<a id="menuToggle" href="#" data-activates="nav-mobile"><i className="fa fa-bars big-icon" aria-hidden="true"/></a>
							</li>
							<li>
								<Link to="/camera"><i className="fa fa-camera-retro big-icon" aria-hidden="true"/></Link>
							</li>
							<li>
								<Link to="/map"><i className="fa fa-map big-icon" aria-hidden="true"/></Link>
							</li>
						</ul>
					</div>
				</div>
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
					<SideNav/>

					<div id="route-content">
						<Switch>
							<Route exact name="index" path="/" component={IndexPage} />
							<Route name="camera" path="/camera" component={Camera} />
							<Route name="map" path="/map" component={Map} />
							<Route name="settings" path="/settings" component={Settings} />
							<Route name="login" path="/login" component={Login} />
							<Route name="register" path="/register" component={Register} />
						</Switch>
					</div>
					<Header/>
				</div>
		</Router>
		)
	}
}

export default MainLayout;
