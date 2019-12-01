import React from "react"
import { Router, RouteComponentProps } from "@reach/router"

import Default from "../components/App/App"
import Layout from "../components/Layout"
import Login from "../components/Authentication/Authentication"
import { Link, navigate } from "gatsby"

// Firebase imports
var firebase = require("firebase/app");
require("firebase/auth");
import firebaseConfig from '../../firebaseConfig'
const firebaseApp =firebase.initializeApp(firebaseConfig);

const App = () => {
    firebase.auth().onAuthStateChanged(function(user: any) {
        if (user) {
          // User is signed in.
          console.log(user);
          console.log("Logged in.");
        } else {
          // No user is signed in.
            console.log("Logged out.");
            // This causes a loop I guess, so I'm putting a link instead
            // navigate("app/login");
        }
      });
  return (
    <Layout>
        <Link to="app/login">Login</Link>
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