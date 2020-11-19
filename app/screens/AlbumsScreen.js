import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, Text, Image } from 'react-native';
import { AlbumContainer } from '../components/AlbumContainer';

export const AlbumsScreen = (props) => {

    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Albums</Text>
                <TouchableOpacity>
                    <Image style={styles.button} source={require('../../img/round_search_white_18.png')} />
                </TouchableOpacity>
            </View>
            <FlatList 
                data={props.albums}
                renderItem={({item}) => (
                    <AlbumContainer albumArt={item.cover} title={item.album}/>
                )}
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
    },

    header: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },

    headerTitle: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'AvantGarde',
        justifyContent: 'center',
        fontSize: 18
    },

    button: {
        opacity: 1,
        height: 25,
        width: 25,
    }

})