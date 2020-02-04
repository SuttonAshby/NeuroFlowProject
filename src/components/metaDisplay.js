import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FilterButton from './filterButton'

import data from '../audio_files.json'

const metaDisplay = (props) => {

    const styles = {
        filter:{
          backgroundColor: '#0e4e84',
          padding: '10px',
          color: 'white'
        }  
    }

    let list = [];
    //getting lists of unique speakers and categories
    let categoryList = [];
    let speakerList = [];
    const getList = (list, type) => {
        for(var i = 0; i < data.length; i++){
            if(!list.includes(data[i][type])){
                list.push(data[i][type])
            }
        }
    }
    getList(categoryList, "category");
    getList(speakerList, "speaker");

    if(props.type == "speaker"){
        for(var i = 0; i < data.length; i++){
            if(!list.includes(data[i].speaker)){
                list.push(data[i].speaker)
            }
        }
    } else if(props.type == "category") {
        for(var i = 0; i < data.length; i++){
            if(!list.includes(data[i].category)){
                list.push(data[i].category)
            }        
        }
    }
    // console.log(list)

    const categories = categoryList.map((el) => {
        return <FilterButton
                    label={el}
                    update={props.update} />
    })

    //NOTE: SPEAKER WILL NOT FILTER OUT ANYTHING SINCE THERE IS ONLY ONE SPEAKER AND AN EMPTY ARRAY RETURNS EVERYTHING
    const speakers = speakerList.map((el) => {
        return <FilterButton
                    label={el}
                    update={props.update} />
    })

    return (
            <Paper style={styles.filter}>
                <Grid container xs={12}>
                    <Grid container item xs={12}>
                        <Grid item xs={6}>
                            <Typography align='center' variant='heading6'>FILTERS</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <FilterButton label={"show all"}update={props.update} /> {/* TODO ENFORCE COLOR CHANGES TO OTHER BUTTONS WHEN SHOW ALL IS USED */}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>Categories: </Typography>
                        {categories}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>Speakers: </Typography>
                        {speakers}
                    </Grid>
                </Grid>
            </Paper>
    )
}

export default metaDisplay;