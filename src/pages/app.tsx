import React, { useEffect, useState } from "react"
import { Router, RouteComponentProps } from "@reach/router"

import Default from "../components/App/App"
import Layout from "../components/Layout"
import Login from "../components/Authentication/Authentication"
import { Link, navigate } from "gatsby"
import Project from "../components/Project"

const _ = require('lodash');

const { getFirebase } = require("../utility")
const firebase = getFirebase()

const App = () => {
  var database = firebase.database();
  const [user, setUser] = useState()
  const [savedProjects, setSavedProjects] = useState<Project[]>([])
  
    useEffect(() =>{
        firebase.auth().onAuthStateChanged(function(user: any) {
          setUser(user)
            if (user) {
              // User is signed in.
              
              // const userId = user.uid
              // database.ref(`/user/${userId}/`).once('value').then(function(snapshot: any){
              //   if (snapshot.val() && !_.isEqual(savedProjects, snapshot.val())){
              //     setSavedProjects(snapshot.val())
              //     console.log(savedProjects)
              //     console.log(snapshot.val())
              //   }
              // })
                
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
        <RouterPage path="/app" pageComponent={<Default user={user} projects={savedProjects}/>} />
      </Router>
    </Layout>
  )
}

export default App

const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
  ) => props.pageComponent;