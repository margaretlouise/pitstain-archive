import React from "react"
import { graphql } from 'gatsby';

import Header from "../components/header";

export default function Shop({ data }) {
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