import React from "react";
import { Link } from "gatsby";

import menuStyles from "./menu.module.css";

export default function Menu(props) {
	return (
		<ul className={menuStyles.menu}>
      <li className={menuStyles.menuItem}><Link to="/">Collection</Link></li>
      <li className={menuStyles.menuItem}><Link to="/shop/">Shop</Link></li>
      <li className={menuStyles.menuItem}><Link to="/about/">About</Link></li>
		</ul>
	);
}