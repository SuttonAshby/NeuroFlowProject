import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Title from '../components/title';
import AudioCollection from '../components/audioCollection';
import MetaDisplay from '../components/metaDisplay'



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCategories: [],
            currentTrack: null,
            isPlaying: false,
            audio: null
        };
      }

    componentDidMount(){
        const newAudio = new Audio(this.state.currentTrack);
        this.setState({audio: newAudio})
    }

    updateCategories = (type) => {
        if(type == "show all"){
            this.setState({showCategories: []}, ()=>{
                // console.log("show all")
            })
        } else {
            let newList = this.state.showCategories;
            if(!this.state.showCategories.includes(type)){
                newList.push(type);
            } else {
                newList = newList.filter(el => el !== type)
            }
            this.setState({showCategories: newList},()=>{
                // console.log(this.state.showCategories)
            } );
        }
    }

    playTrack = (newURL) => {
        //if same track handle play pause
        if(newURL == this.state.currentTrack){
            if(this.state.isPlaying == false) {
                this.state.audio.play();
                //CHECK IF PLAYING BEFORE SETTING TRUE
                //HANDLE ERROR
                this.setState({isPlaying: true});
            } else if(this.state.isPlaying == true){
                this.state.audio.pause();
                this.setState({isPlaying: false})
            }
        //if different track start playing new track
        } else {
            this.setState({currentTrack: newURL}, () => {
                this.state.audio.src = this.state.currentTrack;
                this.state.audio.play();
                this.setState({isPlaying: true})
            });
        }
    }

    render(){
        return (
              <Container>
                <Grid container spacing={2}>
                    <Grid item  xs={12}>
                        <Title /> 
                    </Grid>
                    <Grid container item xs={9}> {/* main content container */}
                        <AudioCollection
                            categories={this.state.showCategories} 
                            play={this.playTrack}
                            current={this.state.currentTrack}/>
                    </Grid>
                    <Grid container item xs={3}> {/* category and speaker container */}
                        <MetaDisplay update={this.updateCategories}/>
                    </Grid>
                </Grid>
              </Container>
        );
    }
  }

export default Home;