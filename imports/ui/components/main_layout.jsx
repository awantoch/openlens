import React, {Component} from 'react';
import IndexPage from './index.js';
import Camera from '../containers/camera.js'
import Map from '../containers/map.js';
import Settings from './settings.js';
import Login from './login.js';
import Register from './register.js';

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

				{Meteor.user() && <li className="hide-toggle"><Link to="/settings">Settings</Link></li>}
				<li className="hide-toggle">{Meteor.user() ? <Link to="/logout">Logout</Link> : <Link to="/login">Login/Register</Link>}</li>
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
