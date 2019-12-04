import React from 'react'
import {Typography, Container} from '@material-ui/core'

import AddProjectCard from './AddProjectCard'

function EditBar(){
    return(
        <Container>
            <Typography component="div" style={{ backgroundColor: '#cee8fc', height: '50vh' }} />
            <AddProjectCard />
        </Container>
    )
}

export default EditBar