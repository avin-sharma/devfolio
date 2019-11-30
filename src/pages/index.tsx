import React from "react"
import { Link, navigate } from "gatsby"
import Button from '@material-ui/core/Button';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Login from "../components/Login/Login"


// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Landing Page</h1>
    <Button variant="contained" color="primary" onClick={()=>{
      navigate("app")
    }}>
      App
    </Button>
  </Layout>
)

export default IndexPage
