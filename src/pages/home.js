import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Title from '../components/title';
import AudioCollection from '../components/audioCollection';
import MetaDisplay from '../components/metaDisplay'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'

const styles = {
    dialog:{
        backgroundColor: '#0e4e84',
        color: 'white',
    },
    button: {
        backgroundColor: '#f16061',
        color: "white",
        margin: "5px",
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCategories: [],
            currentTrack: null,
            isPlaying: false,
            audio: null,
            showAlert: false
        };
      }

    componentDidMount(){
        const newAudio = new Audio(this.state.currentTrack);
        this.setState({audio: newAudio})
    }

    //filter functions
    updateCategories = (type) => {
        if(type == "show all"){
            this.setState({showCategories: []}, ()=>{
            })
        } else {
            let newList = this.state.showCategories;
            if(!this.state.showCategories.includes(type)){
                newList.push(type);
            } else {
                newList = newList.filter(el => el !== type)
            }
            this.setState({showCategories: newList},()=>{
            } );
        }
    }

    //audio functions
    playAudio = () =>{
        const promise = this.state.audio.play();
        //error handling
        if(promise !== undefined){
            promise.then(()=> {
                this.setState({isPlaying: true});
            }).catch(err => {
                this.handleOpen();
                console.log(err);
            })
        }
    } 


    setTrack = (newURL) => {
        //if same track handle play pause
        if(newURL == this.state.currentTrack){
            if(this.state.isPlaying == false) {
                this.playAudio();
            } else if(this.state.isPlaying == true){
                this.state.audio.pause();
                this.setState({isPlaying: false})
            }
        //if different track start playing new track
        } else {
            this.setState({currentTrack: newURL}, () => {
                this.state.audio.src = this.state.currentTrack;
                this.playAudio();

            });
        }
    }
    //dialog functions
    handleClose = () => {
        this.setState({showAlert: false});
      };

    handleOpen = () => {
        this.setState({showAlert: true});
    }

    render(){
        return (<div>
              <Container>
                <Grid container spacing={2}>
                    <Grid item  xs={12}>
                        <Title /> 
                    </Grid>
                    <Grid container item xs={9}> {/* main content container */}
                        <AudioCollection
                            categories={this.state.showCategories} 
                            play={this.setTrack}
                            current={this.state.currentTrack}/>
                    </Grid>
                    <Grid container item xs={3}> {/* category and speaker container */}
                        <MetaDisplay update={this.updateCategories}/>
                    </Grid>
                </Grid>
              </Container>
              <Dialog
              open={this.state.showAlert}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle style={styles.dialog} id="alert-dialog-title">{"OOPS! Something went wrong."}</DialogTitle>
              <DialogContent style={styles.dialog}>
                <DialogContentText style={styles.dialog} id="alert-dialog-description">
                  Please try a different audio file.
                </DialogContentText>
              </DialogContent>
              <DialogActions style={styles.dialog}>
                <Button style={styles.button} onClick={this.handleClose} variant='contained' color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
            </div>
        );
    }
  }

export default Home;