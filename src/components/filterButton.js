import React, { useState } from 'react';
import Button from '@material-ui/core/Button'


const FilterButton = (props) => {

    const [isActive, setActive] = useState(false);

    let styles = {
        buttonPrimary: {
            backgroundColor: '#f16061',
            color: "white",
            margin: "5px",
        },
        buttonSecondary: {
            backgroundColor: 'red', //'#f7474a', //color difference from site to similar
            color: "white",
            margin: "5px",
        }
    }

    if(!isActive){
        return <Button style={styles.buttonPrimary}
        onClick={()=>{
            props.update(props.label)
            setActive(!isActive)}}
        variant="contained" 
        color="primary">{props.label}</Button>
    } else {
        return <Button style={styles.buttonSecondary}
        onClick={()=>{
            props.update(props.label)
            setActive(!isActive)}}
        variant="contained" 
        color="primary">{props.label}</Button>
    }
    
}

export default FilterButton;