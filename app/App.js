import React from 'react';
import { View, DeviceEventEmitter, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { requestPermission } from './Utilities';
import { RNAndroidAudioStore } from "react-native-get-music-files";
import { NowPlayingScreen } from './screens/NowPlayingScreen.js';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Button } from 'react-native';
import { AlbumsScreen } from './screens/AlbumsScreen';
import { NowPlayingComponent } from './components/NowPlayingComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar } from './components/TabBar';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albumArt: '',
            tracks: [],
            albums: [],
            filteredAlbums: [],
            isList: false
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
        this.onAlbumPressed = this.onAlbumPressed.bind(this);
        this.onNowPlayingPressed = this.onNowPlayingPressed.bind(this);
        
    }

    componentDidMount() {

        if(requestPermission()) {
            this.getAlbums();
        } else {
            requestPermission();
        }

    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    onClosePressed = () => {

        this.RBSheet.close();

    }

    onAlbumPressed = (albumInfo) => {

        RNAndroidAudioStore.getSongs({ album: albumInfo.albumName })
            .then(songs => {

                this.setState({
                    isList: true,
                    tracks: songs,
                    albumArt: albumInfo.albumArt
                });
        
                this.RBSheet.open();

            })

    }

    onNowPlayingPressed = () => {

        this.setState({
            isList: false
        });

        this.RBSheet.open();

    }

    render() {

        const { width, height } = Dimensions.get('window');
        const Tab = createMaterialTopTabNavigator();

        return (

            <View style={styles.container}>
                <StatusBar backgroundColor='#040404' />
                <NavigationContainer>
                    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
                        <Tab.Screen name="Tracks" component={AlbumsScreen} />
                        <Tab.Screen name="Albums" component={NowPlayingScreen} />
                        <Tab.Screen name="Artists" component={AlbumsScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
                <NowPlayingComponent style={styles.nowPlaying} onPress={this.onNowPlayingPressed} />
                <RBSheet
                    ref={ref => {this.RBSheet = ref;}}
                    height={height}
                    >
                    <NowPlayingScreen isList={this.state.isList} onClosePressed={this.onClosePressed}/>
                </RBSheet>
            </View>

        )

    }

}


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#040404',
        flexDirection: 'column',
    },

})