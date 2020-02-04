import React from 'react';
import Paper from '@material-ui/core/Paper'
import AudioItem from './audioItem';
import data from '../audio_files.json';

const audioCollection = (props) => {

    const styles = {
        collection:{
          backgroundColor: '#0e4e84',
          padding: '10px',
        }  
      }
    
    const audioItems = data.map((audio) => {
        //no specificed categories returns all items else just valid categories
        if(props.categories.length == 0){
            return <AudioItem
            play={props.play} 
            title={audio.label}
            key={audio.id}
            category={audio.category}
            speaker={audio.speaker}
            description={audio.description}
            url={audio.url}
            current={audio.current}
            />
        } else if(props.categories.includes(audio.category) || props.categories.includes(audio.speaker)){
            return <AudioItem
            play={props.play} 
            title={audio.label}
            key={audio.id}
            category={audio.category}
            speaker={audio.speaker}
            description={audio.description}
            url={audio.url}
            current={audio.current}
            />
        }
    });
    return <Paper style={styles.collection}>{audioItems}</Paper>
}

export default audioCollection;