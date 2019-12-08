import React from 'react'
import {Typography, Container} from '@material-ui/core'

import AddPreviewCard from './AddPreviewCard'

import { MContext } from '../Context/Context'


function Preview(){

    return(
        <Container>
            <Typography component="div" style={{ backgroundColor: '#c338fc', height: '100vh' }}>
            <MContext.Consumer>
                {(context) => (
                    <AddPreviewCard allProjects={context.state.message}/>
                )}
            </MContext.Consumer>
            </Typography>
        </Container>
    )
}

export default Preview