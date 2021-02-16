import React from "react"

import Header from "../components/header";

export default function About({ data }) {
	return (
		<div>
			<Header title={data.site.siteMetadata.title} />
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