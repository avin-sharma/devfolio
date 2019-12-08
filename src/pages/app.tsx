import React, { useEffect } from "react"
import { Router, RouteComponentProps } from "@reach/router"

import Default from "../components/App/App"
import Layout from "../components/Layout"
import Login from "../components/Authentication/Authentication"
import { Link, navigate } from "gatsby"

const {isUserLoggedIn, getFirebase} = require("../utility")
const firebase = getFirebase()

const App = () => {
  
    useEffect(() =>{
        firebase.auth().onAuthStateChanged(function(user: any) {
            if (user) {
              // User is signed in.
              if (location.pathname !== "/app"){
                navigate("/app");
            }
            } else {
              // No user is signed in.
                if (location.pathname === "/app"){
                    navigate("/app/login");
                }
            }
          });
    })


  return (
    <Layout>
      <Router>
        {/* <Profile path="/app/profile" /> */}

        {/* show user details in the future */}
        {/* <Details path="/app/details" /> */}
        
        <RouterPage path="/app/login" pageComponent={<Login />} />
        <RouterPage path="/app" pageComponent={<Default />} />
      </Router>
    </Layout>
  )
}

export default App

const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
  ) => props.pageComponent;