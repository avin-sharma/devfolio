import React from 'react'
import {Typography, Container} from '@material-ui/core'

import AddPreviewCard from './AddPreviewCard'
import Project from '../Project'


function Preview(props: {projects:Project[], setProjects: React.Dispatch<React.SetStateAction<Project[]>>}){

    return(
        <Container>
            {props.projects.map(function(project, index){
                return <AddPreviewCard key={index} project={project}/>
            })}
        </Container>
    )
}

export default Preview