import React from 'react';
import { View, DeviceEventEmitter, StatusBar, StyleSheet } from 'react-native';
import { requestPermission } from './Utilities';
import { RNAndroidAudioStore } from "react-native-get-music-files";
import { NowPlaying } from './screens/NowPlaying.js';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            albums: []
        };

        requestPermission();
        
        this.getAlbums = () => {
            RNAndroidAudioStore.getAlbums({ artist : '' })
                .then(f => {
                this.setState({ ...this.state, albums: f });
                //console.log(this.state.albums);
                })
                .catch(er => alert(JSON.stringify(error)));
        };
        
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

    render() {

        return (

            <View style={styles.container}>
                <StatusBar backgroundColor='#040404' />
                <NowPlaying />
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
    }

})

//