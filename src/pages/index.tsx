import React from "react"
import { Link, navigate } from "gatsby"
import Button from '@material-ui/core/Button';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Login from "../components/Authentication/Authentication"


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

// Material UI Button, uses Gatsby navigate to go to app
// instead of the <Link> tag as link changes the look of the button.
const displayAppButton = () => {
  return <Button variant="contained" color="primary" onClick={()=>{
    navigate("/app")
    }}>
      Get Started Now!
    </Button>
  }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Developer Portfolio Builder</h1>
    <p>
      Make your own web porfolio with ease! Just create an account & enter your desired project information. Get a preview of your web portfolio on the side as you add more projects and finally download and run your very own website!
    </p>
    {displayAppButton()}
    <br />
    <br />
  </Layout>
)

export default IndexPage
