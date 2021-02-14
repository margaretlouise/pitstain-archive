import React from "react"

import Header from "../components/header";
import Menu from "../components/menu";

export default function About({ data }) {
	return (
		<div>
			<Header title={data.site.siteMetadata.title} />
      <Menu />
		</div>
	)
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`