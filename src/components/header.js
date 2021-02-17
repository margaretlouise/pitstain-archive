import React from "react"
import { Link } from "gatsby";

import headerStyles from "./header.module.css";

export default function Header(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<ul className={headerStyles.menu}>
				<li className={headerStyles.menuItem}><Link activeClassName={headerStyles.activeStyle} to="/">Home</Link></li>
				<li className={headerStyles.menuItem}><Link activeClassName={headerStyles.activeStyle} to="/pitstain-archive/">Pitstain Archive</Link></li>
				<li className={headerStyles.menuItem}><Link activeClassName={headerStyles.activeStyle} to="/shop/">Shop</Link></li>
				<li className={headerStyles.menuItem}><Link activeClassName={headerStyles.activeStyle} to="/about/">About</Link></li>
			</ul>
		</div>
	)
}