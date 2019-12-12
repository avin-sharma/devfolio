import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Download Page" />
    <br />
    <a href=".../web_page_portfolio" download>Click here to download your web page</a>
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
