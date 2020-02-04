import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = {
    title:{
      backgroundColor: '#0e4e84',
      padding: '10px',
      color: "white"

    }
  }


export default function Title(){
    return(
    <Paper style={styles.title}>
        <Typography variant="h2" align="center"><b>NeuroFlow</b></Typography>
        <Typography variant="h3" align="center">Audio Collection</Typography>
    </Paper>
    )
}