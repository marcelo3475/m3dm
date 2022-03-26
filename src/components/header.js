import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `fixed`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >

      <h1 style={{ margin: 10 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    
    </div>

    <div className="homebutton">
        <button>  <Link to="/">Home</Link> </button>
     </div>
  
     <div>  
        <button> <Link to="/about/">About</Link> </button>
    </div>
  
    <div>
        <button> <Link to="/contact/">Contact</Link> </button>
    </div>
              
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
