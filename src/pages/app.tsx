import React from "react"
import { Router, RouteComponentProps } from "@reach/router"

import Layout from "../components/Layout"
import Login from "../components/Login/Login"
import { Link } from "gatsby"

const App = () => {
  return (
    <Layout>
        <Link to="/app/login">Login</Link>
      <Router>
        {/* <Profile path="/app/profile" /> */}

        {/* show user details in the future */}
        {/* <Details path="/app/details" /> */}
        
        <RouterPage path="/app/login" pageComponent={<Login />} />
        {/* <Default path="/app" /> */}
      </Router>
    </Layout>
  )
}

export default App

const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
  ) => props.pageComponent;