import React from 'react';
import { View, DeviceEventEmitter, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { requestPermission } from './Utilities';
import { RNAndroidAudioStore } from "react-native-get-music-files";
import { NowPlayingScreen } from './screens/NowPlayingScreen.js';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Button } from 'react-native';
import { AlbumsScreen } from './screens/AlbumsScreen';
import { NowPlayingComponent } from './components/NowPlayingComponent';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            albums: [],
            filteredAlbums: [],
        };

        requestPermission();
        
        this.getAlbums = () => {
            RNAndroidAudioStore.getAlbums({ artist : '' })
                .then(f => {
                this.setState({ ...this.state, albums: f, filteredAlbums: f });
                // let filteredAlbums = this.state.albums.filter(function(e) {
                //     return e.album.includes("Aay")
                // });
                // this.setState({
                //     filteredAlbums: filteredAlbums
                // });
                //console.log(this.state.albums);
                })
                .catch(er => alert(JSON.stringify(error)));
        };

        this.onClosePressed = this.onClosePressed.bind(this);
        
    }

    // getAll = (artist) => {

    //     RNAndroidAudioStore.getAlbums({artist: artist})
    //     .then(f => {
    //         this.setState({ ...this.state, albums: f })
    //     })
    //     .catch(error => alert(JSON.stringify(error)));

    //     console.log(this.state.albums);

    // }

    componentDidMount() {

        if(requestPermission()) {
            this.getAlbums();
        } else {
            requestPermission();
        }

        // DeviceEventEmitter.addListener(
        //     'onBatchReceived',
        //     (params) => {
        //         console.log(this.state.tracks);
        //         this.setState({ ...this.state, tracks: [...this.state.tracks, params.batch] })
        //     }
        // )

    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    onClosePressed = () => {

        this.RBSheet.close();

    }

    render() {

        const { width, height } = Dimensions.get('window');

        return (

            <View style={styles.container}>
                <StatusBar backgroundColor='#040404' />
                <AlbumsScreen albums={this.state.filteredAlbums} />
                <NowPlayingComponent style={styles.nowPlaying} onPress={() => this.RBSheet.open()} />
                <RBSheet
                    ref={ref => {this.RBSheet = ref;}}
                    height={height}
                    >
                    <NowPlayingScreen onClosePressed={this.onClosePressed}/>
                </RBSheet>
            </View>

        )

    }

}

//file:///storage/emualated/0/DCIM/Camera/IMG_20180714_060814.jpg
//<Image source={{uri: 'file:///storage/emualated/0/DCIM/Camera/IMG_20180714_060814.jpg'}} style={{width: 200, height: 200}} />


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#040404',
        flexDirection: 'column',
    },

})

//