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
							</li>
							<li>
								<Link className="black-text" to="/map">Map</Link>
							</li>
							<li>
								<Link className="black-text" to="/settings">Settings</Link>
							</li>
							<li>
								<a id="menuToggle" href="#" data-activates="nav-mobile"><i className="black-text material-icons">menu</i></a>
							</li>
						</ul>
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
					<ul id="nav-mobile" className="side-nav">
						<li>
							<h3>Layer 1</h3>
						</li>
						<li>
							<h3>Layer 2</h3>
						</li>
						<li>
							<h3>Layer 3</h3>
						</li>
						<li>
							<h3>Layer 4</h3>
						</li>
					</ul>
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
	componentDidMount(){
        $('#menuToggle').sideNav();
	}
}

export default MainLayout;
