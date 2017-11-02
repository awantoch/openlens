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
				<nav>
					<div className="nav-wrapper">
						<ul>
							<li>
								<a id="menuToggle" href="#" data-activates="nav-mobile"><i className="fa fa-bars" aria-hidden="true"></i></a>
							</li>
							<li>
								<Link to="/camera">Camera</Link>
							</li>
							<li>
								<Link to="/map">Map</Link>
							</li>
						</ul>
					</div>
				</nav>
        );
    },
});

const SideNav = () => ({
	render() {
		return (
			<ul id="nav-mobile" className="side-nav">
				<li className="subheader"><i className="fa fa-search-plus" aria-hidden="true" style={{padding: '10px'}}></i>Quick Lenses</li>
				<li><a href="#">Events</a></li>
				<li><a href="#">Transport</a></li>
				<li><a href="#">Shopping</a></li>
				<li><a href="#">Adventures</a></li>
				<li><div className="divider"></div></li>
				<li className="hide-toggle"><Link to="/settings">Settings</Link></li>
			</ul>
		)
	}
})

class MainLayout extends Component {

	constructor(props) {
		super()
	}

	render(){
		return(
		<Router>
				<div id="page-content">
					<Header/>
					<SideNav/>
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
        $('#menuToggle').sideNav({
            menuWidth: 200,
            closeOnClick: true,
		});
	}
}

export default MainLayout;
