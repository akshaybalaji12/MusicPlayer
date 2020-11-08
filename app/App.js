import React from 'react';
import { View, DeviceEventEmitter, StatusBar } from 'react-native';
import { Header } from './components/Header.js';
import { requestPermission } from './Utilities';
import { RNAndroidAudioStore } from "react-native-get-music-files";
import { AlbumArt } from './components/AlbumArt.js';
import { TrackInfo } from './components/TrackInfo.js';
import { Seekbar } from './components/Seekbar.js';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            albums: []
        };
        
        this.getAlbums = () => {
            RNAndroidAudioStore.getAlbums({ artist : '' })
                .then(f => {
                this.setState({ ...this.state, albums: f });
                console.log(this.state.albums);
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
        requestPermission();
        this.getAlbums();

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

            <View style={{flex: 1, backgroundColor: '#040404'}}>
                <StatusBar backgroundColor='#040404' />
                <Header title={'Vaaranam Aayiram'.toUpperCase()}/>
                <AlbumArt />
                <TrackInfo />
            </View>

        )

    }

}