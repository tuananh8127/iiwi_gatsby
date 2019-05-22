import React from "react";
import "./menu.css";
import { Link } from "gatsby";

export default () => {

	return (
		<header>
			<h3 className="nav-brand"><Link to={'/'}>Gatsby Blog</Link></h3>
			<ul>
				<li><Link to={'/about/'}>About</Link></li>
				<li><Link to={'/contact/'}>Contact</Link></li>
				<li><Link to={'/'}>Home</Link></li>
			</ul>
		</header>
		)
}