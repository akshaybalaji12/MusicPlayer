import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { isFavourite } from '../Utilities';

export const TrackInfo = (props) => {

    const favIcon = props.isFavourite ? require('../../img/round_favorite_white_18.png') : require('../../img/round_favorite_border_white_18.png');
    const favStyle = props.isFavourite ? styles.buttonToggled : styles.button;

    return (

        <View style={styles.container}>

            <TouchableOpacity>
                <Image style={styles.button} source={require('../../img/round_add_circle_outline_white_18.png')} />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>
                    Adiyae Kolluthey
                </Text>

                <Text style={styles.textAlbum}>
                    Benny Dayal, Krish, Shruti Hassan
                </Text>
            </View>

            <TouchableOpacity onPress={props.onFavToggle}>
                <Image style={favStyle} source={favIcon} />
            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        height: 50,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        marginTop: 20
    },

    textTitle: {
        flex: 1,
        color: '#fafafa',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'AvantGarde'
    },

    textAlbum: {
        flex: 1,
        color: '#fafafa',
        fontSize: 12,
        paddingTop: 2,
        textAlign: 'center',
        fontFamily: 'AvantGarde'
    },

    button: {
        marginTop: 10,
        marginLeft: 15,
        marginRight:15,
        opacity: 1,
        tintColor: '#fafafa',
        width: 30,
        height: 30
    },

    buttonToggled: {
        marginTop: 10,
        marginLeft: 15,
        marginRight:15,
        opacity: 1,
        tintColor: '#ec5858',
        width: 30,
        height: 30
    }

})