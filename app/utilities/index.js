import { Alert, PermissionsAndroid } from 'react-native';

export const isFavourite = () => {
    return false;
}

export const getStoragePermission = async () => {

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
        return;
    } else {
        
        Alert.alert(
            'Permissions',
			'Storage access is required',
			[{ text: 'OK', onPress: async () => await getStoragePermission() }],
			{ cancelable: false }
        );
        
    }

}

export const checkStoragePermissions = async () => {

    let isGranted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );

    return isGranted;

}