import React, { useState } from 'react'
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core'
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Project from '../EditBar/Project'

function AddPreviewCard(props:{allProjects: Project[]}){

    return (
        props.allProjects.map(function(value){
            return (<Card style={{display: 'inline-block'}}>
                <CardContent>
                    Project Title: {value.title}
                    <br/>
                    <br/>
                    Description of the project: {value.description}
                    <br/>
                    <br/>
                    Technologies: {value.technologies}
                    <br/>
                    <br/>
                    Link: {value.link}
                    <br/>
                </CardContent>
            </Card>)
        })
    )
}

export default AddPreviewCard