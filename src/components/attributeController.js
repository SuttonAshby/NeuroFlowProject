import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


//NOT BUILT OUT WOULD BE USER CONTROL TO HIDE AND SHOW DIFFERENT ATTRIBUTES ON LIST ITEMS

const attributeController = (props) => {
    return (
            <Paper>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography>
                            Attributes:
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>
                            Speaker
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>
                            Attributes:
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
    )
}

export default attributeController;