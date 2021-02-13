import React from "react";
import { Link } from "gatsby";

export default function Menu(props) {
	return (
		<ul>
      <li><Link to="/">Collection</Link></li>
      <li><Link to="/shop/">Shop</Link></li>
      <li><Link to="/about/">About</Link></li>
		</ul>
	);
}