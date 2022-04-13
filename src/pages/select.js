import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const Select = () => (
    <Layout>
        <Seo title="Selection" />
        <div className="homebutton">
          <button>  <Link to="/">Home</Link> </button>
      </div>
    
      <div>  
          <button> <Link to="/about/">About</Link> </button>
      </div>

      <div>

          
      </div>

    </Layout>
)

export default Select