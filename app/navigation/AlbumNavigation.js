import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import AlbumsScreen from '../screens/AlbumsScreen';
import AlbumTracksScreen from '../screens/AlbumTracksScreen';

const duration = { config: { duration: 100 } };

const AlbumNavigation = (props) => {

    const Stack = createStackNavigator();

    const screenOptions = {
        ...TransitionPresets.RevealFromBottomAndroid,
        transitionSpec: {
            open: duration,
            close: duration
        }
    };

    return (

        <Stack.Navigator headerMode='none' screenOptions={screenOptions}>
            <Stack.Screen name="albums" component={AlbumsScreen} />
            <Stack.Screen name="album" component={AlbumTracksScreen} />
        </Stack.Navigator>

    )

}

export default AlbumNavigation;