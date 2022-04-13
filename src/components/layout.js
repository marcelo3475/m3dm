/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `1 auto`,
          maxWidth: 1080,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main> 

        <footer
           
      >
          © {new Date().getFullYear()}, Develop By
          {` `}
          <a href="https://twitter.com/marcelo69420">@marce69420</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout