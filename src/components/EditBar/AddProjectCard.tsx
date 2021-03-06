import React, { useState } from 'react'
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core'
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';

import Project from '../Project'

function AddProjectCard(props:{index: number, project: Project, allProjects: Project[], setProjects: React.Dispatch<React.SetStateAction<Project[]>>}){

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        maxWidth: 300,
        },
        chips: {
        display: 'flex',
        flexWrap: 'wrap',
        },
        chip: {
        margin: 2,
        },
        noLabel: {
        marginTop: theme.spacing(3),
        },
    }),
    );

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

    const allTechnologies = [
    'React.js',
    'GraphQL',
    'JavaScript',
    'Gatsby.js',
    ];

    const getStyles = (name: string, technologiesUsed: string[], theme: Theme) => {
    return {
        fontWeight:
        technologiesUsed.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
    }

    const classes = useStyles();
    const theme = useTheme();
    const [technologiesUsed, setTechnologiesUsed] = React.useState<string[]>(props.project.technologies);
    const [title, setTitle] = useState(props.project.title)
    const [description, setDescription] = useState(props.project.description)
    const [link, setLink] = useState(props.project.link)

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTechnologiesUsed(event.target.value as string[]);
        updateAllProjects(title, description, event.target.value as string[], link)
    };

    const updateAllProjects = (newTitle: string, newDescription: string, newTechnologies: string[], newLink: string) =>{
        props.setProjects(props.allProjects.map(function(value, index){
            if(index === props.index){
                let proj = new Project(newTitle, newDescription, newTechnologies, newLink)
                console.log(proj)
                return proj
            }
            console.log(value)
            return value
        }))
    }

    const deleteProject = () => {
        props.setProjects(props.allProjects.filter(function(value, index){
            return index !== props.index
        }))
    }

    return (
        <Card>
            <CardContent>
                <label htmlFor="title">
                    Project Title:
                </label>
                <br/>
                <input type="text" value={title} id="title" onChange={e => {
                    setTitle(e.target.value)
                    updateAllProjects(e.target.value, description, technologiesUsed, link)
                    }}/>
                <br/>
                Description of the project:
                <br/>
                <textarea value={description} onChange={e => {
                    setDescription(e.target.value)
                    updateAllProjects(title, e.target.value, technologiesUsed, link)
                    }} />
                <br/>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-chip-label">Technologies</InputLabel>
                    <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    value={technologiesUsed}
                    onChange={handleChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={selected => (
                        <div className={classes.chips}>
                        {(selected as string[]).map(value => (
                            <Chip key={value} label={value} className={classes.chip} />
                        ))}
                        </div>
                    )}
                    MenuProps={MenuProps}
                    >
                    {allTechnologies.map(name => (
                        <MenuItem key={name} value={name} style={getStyles(name, technologiesUsed, theme)}>
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <br/>
                <label htmlFor="link">
                    Link:
                </label>
                <br/>
                <input type="text" value={link} id="link" onChange={e => {
                    setLink(e.target.value)
                    updateAllProjects(title, description, technologiesUsed, e.target.value)
                    }}/>
            </CardContent>
            <CardActions>
            <IconButton aria-label="delete" onClick={deleteProject} >
              <DeleteIcon fontSize="small" htmlColor="#FF0000" />
            </IconButton>
            </CardActions>
        </Card>
    )
}

export default AddProjectCard