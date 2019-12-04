import React from 'react'
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core'
import Image from '../image'

function AddProjectCard(){
    return (
        <Card>
            <CardContent>
                <h4>Project Title</h4>
                <p>Description of the project.</p>
                <img src="public/static/javascript.svg" />
            </CardContent>
            <CardActions>
                <Button variant="contained" color="secondary">
                    Add Project
                </Button>
            </CardActions>
        </Card>
    )
}

export default AddProjectCard