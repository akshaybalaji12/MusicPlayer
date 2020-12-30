import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';

export const TabBar = ({ navigationState, navigation, position }) => {

    var scrollView;

    return(

        <View style={{
            height: 60,
            backgroundColor: '#040404',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            {navigationState.routes.map((route, index) => {

                const isFocused = navigationState.index === index;

                const onPress = () => {

                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }

                }

                return (

                    <TouchableOpacity onPress={onPress}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        key={route.key}
                    >

                        <Animated.View style={{
                            height: 30,
                            padding: 5,
                            margin: 5,
                            justifyContent: 'center',
                            backgroundColor: 'transparent'
                        }}>
                            <Animated.Text style={{
                                fontFamily: 'ProductSansBold',
                                color: isFocused ? '#4acfac' : '#fff',
                                fontSize: 25
                            }}>
                                {route.name}
                            </Animated.Text>
                        </Animated.View>

                    </TouchableOpacity>

                )

                })}
        </View>

    )

}