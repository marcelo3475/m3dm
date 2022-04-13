import * as React from "react"
import { Link } from "gatsby"



import Layout from "../components/layout"
import Seo from "../components/seo"
//import Header from "../components/header"


const IndexPage = () => (

  <Layout>
      <Seo title="Home" />
      
    
  
      <div className="homebutton">
          <button>  <Link to="/">Home</Link> </button>
      </div>
    
      <div>  
          <button> <Link to="/about/">About</Link> </button>
      </div>
    
      <div>
          <button> <Link to="/contact/">Contact</Link> </button>
    </div>
          
                
      <div>
        <p>
          Impresiones 3D <br/> 
          Decorativas <br/>
          Funcionales <br/>
        </p>
     </div>

     <div>
       <button><Link to="/select/">Elegir</Link></button>
     </div>

  </Layout>    
)

export default IndexPage
