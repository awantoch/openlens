import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SideNav extends Component {

	constructor(props) {
		super(props);
	}

	switchLense(lensId) {
		Session.set('navLens', lensId);
	}

	render() {
		const {lenses} = this.props;
		return (
			<ul id="nav-mobile" className="side-nav">
				<li className="subheader"><i className="fa fa-search-plus" aria-hidden="true" style={{padding: '10px'}}></i>Lenses</li>
				{lenses ? lenses.map((lens)=>{
					return (
						<li key={lens._id}><a onClick={this.switchLense.bind(this, lens._id)}>{lens.name}</a></li>
					)
				}) : null}
				<li><div className="divider"></div></li>

				{Meteor.user() && <li className="hide-toggle"><Link to="/settings">Settings</Link></li>}
				<li className="hide-toggle">{Meteor.user() ? <Link to="/logout">Logout</Link> : <Link to="/login">Login/Register</Link>}</li>
			</ul>
		)
	}

	componentDidMount(){
        $('#menuToggle').sideNav({
            menuWidth: 200,
            closeOnClick: true,
		});
	}
}

export default SideNav;