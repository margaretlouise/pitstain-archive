import React from "react";
import { Link } from "gatsby";

import menuStyles from "./menu.module.css";

export default function Menu() {

  const activeStyle = {
    textDecoration: "underline",
  }

	return (
		<ul className={menuStyles.menu}>
      <li className={menuStyles.menuItem}><Link activeStyle={activeStyle} to="/">Collection</Link></li>
      <li className={menuStyles.menuItem}><Link activeStyle={activeStyle} to="/shop/">Shop</Link></li>
      <li className={menuStyles.menuItem}><Link activeStyle={activeStyle} to="/about/">About</Link></li>
		</ul>
	);
}