import { PermissionsAndroid } from 'react-native';

export const isFavourite = () => {
    return false;
}

export const requestPermission = async () => {

    try{

        const granted = await PermissionsAndroid.requestMultiple(
            [
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            ],
            {
                title: 'Permissions',
                message: 'Storage access is required',
                buttonPositive: 'OK',
            }
        );

        if(granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
        } else {
            return false;
        }

    } catch(error) {
        alert(error);
    }

};