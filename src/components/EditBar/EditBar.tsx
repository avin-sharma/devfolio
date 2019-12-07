import React, {useState} from 'react'
import {Typography, Container, Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import AddProjectCard from './AddProjectCard'

class Project {
    title = "";
    description = "";
    technologies: String[] = [];
    link = ""
}

function EditBar(){
    const [projects, setProjects] = useState<Project[]>([])
    let key = 0

    return(
        <Container>
            {projects.map(function(project, index) {
                    return <AddProjectCard key={index} project={project} />
                })}
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={()=>{
                    setProjects([...projects, new Project()])
                }}/>
            </Fab>
        </Container>
    )
}

export default EditBar