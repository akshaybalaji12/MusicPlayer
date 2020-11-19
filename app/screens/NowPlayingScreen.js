import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../components/Header.js';
import { AlbumArt } from '../components/AlbumArt.js';
import { TrackInfo } from '../components/TrackInfo.js';
import { Seekbar } from '../components/Seekbar.js';
import { Controls } from '../components/Controls.js';

export class NowPlayingScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isPaused: false,
            isFavourite: false,
            currentTrack: 0
        }

        this.onPlayToggle = this.onPlayToggle.bind(this);
        this.onFavToggle = this.onFavToggle.bind(this);

    }

    onPlayToggle = () => {

        this.setState({isPaused: !this.state.isPaused});

    }

    onFavToggle = () => {

        this.setState({isFavourite: !this.state.isFavourite});

    }

    render() {

        return(

            <View style={styles.container}>
                <Header title='Vaaranam Aayiram' onClosePressed={this.props.onClosePressed}/>
                <AlbumArt album = 'Vaaranam Aayiram'/>
                <View>
                    <TrackInfo isFavourite={this.state.isFavourite} onFavToggle={this.onFavToggle} />
                    <Seekbar />
                    <Controls isPaused={this.state.isPaused} onPlayToggle={this.onPlayToggle}/>
                </View>
                <View />
            </View>

        )

    }

}

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#040404',
        justifyContent: 'space-between'
    }

})