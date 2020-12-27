import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

export const TabBar = ({ navigationState, navigation, position }) => {

    return(

        <View style={{
            height: 80,
            backgroundColor: '#040404',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
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

                const title = route.name;
                const inputRange = navigationState.routes.map((_, i) => i);
                const focusAnim = Animated.interpolate(position, {
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0,1,0],
                });

                console.log(focusAnim);

                return (

                    <TouchableOpacity onPress={onPress}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    >

                        <Animated.View style={{
                            height: 30,
                            padding: 10,
                            margin: 10,
                            justifyContent: 'center',
                            backgroundColor: 'transparent'
                        }}>
                            <Animated.Text style={{
                                fontFamily: 'ProductSansBold',
                                color: isFocused ? '#4acfac' : '#fff',
                                fontSize: 25
                            }}>
                                {title}
                            </Animated.Text>
                        </Animated.View>

                    </TouchableOpacity>

                )

            })}
        </View>

    )

}