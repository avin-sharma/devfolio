import React, {useState, useEffect} from 'react';
import { navigate } from "gatsby";
import Button from '@material-ui/core/Button';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import EditBar from '../EditBar/EditBar'
import Preview from '../Preview/Preview'
import MyProvider from '../Context/Context'
import Project from '../Project'
import Checkout from '../Stripe/Stripe'


import { getFirebase } from '../../utility'
const firebase = getFirebase()

const _ = require('lodash');

const displayLogOutButton = () => {


    return <Button variant="contained" color="primary" onClick={()=>{
        console.log("Log out clicked!")
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            navigate("/app")
          }).catch(function(error: { code: any; message: any; }) {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
      }}>
        Log out
      </Button>
}


function App (props: {user: any, savedProjects: Project[]}) {
  var database = firebase.database();
  const [projects, setProjects] = useState<Project[]>([])
  const [loaded, setLoaded] = useState(false)
  
  useEffect(()=>{
    
    if (props.user){
      console.log("User exists")  
      const userId = props.user.uid
      database.ref(`/user/${userId}/`).once('value').then(function(snapshot: any){
        if (snapshot.val() && !loaded){
          setProjects(snapshot.val())
          setLoaded(true)
          console.log(projects)
          console.log(snapshot.val())
        }
      })
    }
  })
  
  // if (props.savedProjects !== projects){
  //   setProjects(props.savedProjects)
  // }


    return(
        <div>
            <h1>Start Building Now!</h1>
            {displayLogOutButton()}
            <Button variant="contained" color="secondary" onClick={()=>{
              console.log("Save clicked!")
              database.ref(`/user/${props.user.uid}/`).set(projects);
            }}>
              Save
            </Button>
            <Grid container>
                <Grid item xs={4}>
                  <EditBar projects={projects} setProjects={setProjects}/>
                </Grid>
                <Grid item xs={8}>
                  <Preview projects={projects} setProjects={setProjects}/>
                </Grid>
            </Grid>
            <Checkout projects={projects}/>
        </div>

    )
}

export default App;