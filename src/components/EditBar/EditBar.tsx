import React, {useState} from 'react'
import {Typography, Container, Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import AddProjectCard from './AddProjectCard'
import Project from '../Project'

import { MContext } from '../Context/Context'


function EditBar(props: {projects:Project[], setProjects: React.Dispatch<React.SetStateAction<Project[]>>}){
    
    let key = 0

    return(
        <Container>
            {props.projects.map(function(project, index) {
                    return <AddProjectCard key={index} index={index} project={project} allProjects={props.projects} setProjects={props.setProjects}/>
                })}
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={()=>{
                    props.setProjects([...props.projects, new Project("", "", [], "")])
                }}/>
            </Fab>
            {/* <MContext.Consumer>
                {(context) => (
                    <button onClick={()=>{context.setMessage(projects)}}>Save</button>
                )}
            </MContext.Consumer> */}
        </Container>
    )
}

export default EditBar