import React, {useState} from 'react'
import {Typography, Container, Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import AddProjectCard from './AddProjectCard'
import Project from './Project'


function EditBar(){
    const [projects, setProjects] = useState<Project[]>([])
    let key = 0

    return(
        <Container>
            {projects.map(function(project, index) {
                    return <AddProjectCard key={index} index={index} project={project} allProjects={projects} setProjects={setProjects}/>
                })}
            <Fab size="small" color="primary" aria-label="add">
                <AddIcon onClick={()=>{
                    setProjects([...projects, new Project("", "", [], "")])
                }}/>
            </Fab>
        </Container>
    )
}

export default EditBar