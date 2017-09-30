import React, {Component} from 'react';
import IndexPage from './index.js';

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
				<Header/>

				<div id="page-content" className="thebackground">
						<Switch>
							<Route exact name="index" path="/" component={IndexPage} />
						</Switch>
				</div>
			</div>
		</Router>
		)
	}
}

export default MainLayout;
