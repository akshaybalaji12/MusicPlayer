import React from 'react';
import { View, DeviceEventEmitter, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { NowPlayingScreen } from './screens/NowPlayingScreen.js';
import RBSheet from 'react-native-raw-bottom-sheet';
import AlbumsScreen from './screens/AlbumsScreen';
import PlaylistScreen from './screens/PlaylistsScreen';
import { NowPlayingComponent } from './components/NowPlayingComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar } from './components/TabBar';
import { AlbumTracksScreen } from './screens/AlbumTracksScreen';

export default class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isList: false
        };

        this.onClosePressed = this.onClosePressed.bind(this);
        this.onNowPlayingPressed = this.onNowPlayingPressed.bind(this);
        
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    onClosePressed = () => {

        this.RBSheet.close();

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
                    <Tab.Navigator
                        tabBar={props => <TabBar {...props} />}>
                        <Tab.Screen name="Tracks" component={AlbumTracksScreen} />
                        <Tab.Screen name="Albums" component={AlbumsScreen} />
                        <Tab.Screen name="Playlists" component={PlaylistScreen} />
                        <Tab.Screen name="Search" component={PlaylistScreen} />
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