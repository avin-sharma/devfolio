import React, { useState } from 'react'
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core'
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Project from '../Project'

function AddPreviewCard(props:{project: Project}){

    return (
        <Card style={{display: 'inline-block'}}>
            <CardContent>
                Project Title: {props.project.title}
                <br/>
                <br/>
                Description of the project: {props.project.description}
                <br/>
                <br/>
                Technologies: {props.project.technologies}
                <br/>
                <br/>
                Link: {props.project.link}
                <br/>
            </CardContent>
        </Card>
    )
}

export default AddPreviewCard