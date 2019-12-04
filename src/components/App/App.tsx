import React, {useEffect} from 'react';
import { navigate } from "gatsby";
import Button from '@material-ui/core/Button';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

import { getFirebase } from '../../utility'
const firebase = getFirebase()

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

function App () {
    return(
        <div>
            <h1>App rendered!</h1>
            {displayLogOutButton()}
            <Grid container>
              <Grid item xs={4}>
                1
              </Grid>
              <Grid item xs={8}>
                2
              </Grid>
            </Grid>
        </div>

    )
}

export default App;