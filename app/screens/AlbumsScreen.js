import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, Text, Image, TextInput } from 'react-native';
import { AlbumContainer } from '../components/AlbumContainer';

export const AlbumsScreen = (props) => {

    
    // <TouchableOpacity>
    //     <Image style={styles.button} source={require('../../img/round_search_white_18.png')} />
    // </TouchableOpacity>

    return(

        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Image
                    source={require('../../img/round_search_white_18.png')} //Change your icon image here
                    style={styles.searchIcon}
                />

                <TextInput
                    style={{ flex: 1, color: '#fafafa' }}
                    placeholder="Search"
                    placeholderTextColor='#D7D7D8'
                    fontFamily='ProductSansBold'
                    underlineColorAndroid="transparent"
                />
            </View>
            <FlatList 
                data={props.albums}
                renderItem={({item}) => (
                    <AlbumContainer onAlbumPressed={props.onAlbumPressed} albumArt={item.cover} title={item.album}/>
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
        backgroundColor: '#121212',
    },

    header: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#121212'
    },

    headerTitle: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'ProductSans',
        justifyContent: 'center',
        fontSize: 30
    },

    button: {
        opacity: 1,
        height: 25,
        width: 25,
    },

    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        borderWidth: 1,
        borderColor: '#4acfac',
        height: 50,
        borderRadius: 25,
        margin: 10,
    },

    searchIcon: {
        padding: 10,
        margin: 12.5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        tintColor: '#4acfac'
    }

})