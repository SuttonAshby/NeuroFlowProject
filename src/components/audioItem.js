import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const AudioItem = (props) => {
    const url = props.url
    const [isPlaying, setPlay] = useState(false);
    const [showFull, setShow] = useState(false);
    //TODO CHANGE BUTTON IF USER STARTS DIFFERENT TRACK

    const shortDes = props.description.split(" ").slice(0, 15).join(" ");

    const styles = {
      paper:{
        // backgroundColor: '#0e4e84',
        padding: '10px',
        margin: '10px',
        flexGrow: '1'
      },
      description:{
          cursor: "pointer"
      }  
    }

    return (
        <Grid container item xs={12}>
            <Paper style={styles.paper}>
                <Grid container item xs={12}>
                    <Grid item xs={2}>
                        <IconButton onClick={()=>{
                            props.play(url)
                            setPlay(!isPlaying);
                        }} color="primary">
                            {!isPlaying ? (<PlayArrowIcon />) : (<PauseIcon />)}
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1">
                            Title: {props.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="subtitle1">
                            Speaker: {props.speaker}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                    <Typography variant="subtitle1">
                        Category: {props.category}
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                     <Typography style={styles.description}variant="body1" onClick={()=>{setShow(!showFull)}}>
                        Description: {!showFull ? (`${shortDes} ...`) : props.description}
                    </Typography>
                </Grid>                                       
            </Paper>
        </Grid>
    )
}

export default AudioItem;