import React from "react"
import { Link } from "gatsby";

import headerStyles from "./header.module.css";

export default function Header(props) {
	const activeStyle = {
    textDecoration: "underline",
  }

	return (
		<div>
			<h1>{props.title}</h1>
			<ul className={headerStyles.menu}>
      <li className={headerStyles.menuItem}><Link activeStyle={activeStyle} to="/">Collection</Link></li>
      <li className={headerStyles.menuItem}><Link activeStyle={activeStyle} to="/shop/">Shop</Link></li>
      <li className={headerStyles.menuItem}><Link activeStyle={activeStyle} to="/about/">About</Link></li>
		</ul>
		</div>
	)
}