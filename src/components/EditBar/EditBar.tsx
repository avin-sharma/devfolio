import React, {useState} from 'react'
import {Typography, Container, Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import AddProjectCard from './AddProjectCard'
import Project from './Project'

import { MContext } from '../Context/Context'


function EditBar(){
    const [projects, setProjects] = useState<Project[]>([])
    let key = 0

    return(
        <Container>
            {projects.map(function(project, index) {
                    return <AddProjectCard key={index} index={index} project={project} allProjects={projects} setProjects={setProjects}/>
                })}
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={()=>{
                    setProjects([...projects, new Project("", "", [], "")])
                }}/>
            </Fab>
            <MContext.Consumer>
                {(context) => (
                    <button onClick={()=>{context.setMessage(projects)}}>Save</button>
                )}
            </MContext.Consumer>
        </Container>
    )
}

export default EditBar