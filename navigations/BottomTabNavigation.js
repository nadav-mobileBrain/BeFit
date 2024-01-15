import { View, Text, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons } from '../constants';
import { Activity, Home, Profile, Trainings, TrainingsV2 } from "../screens";
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: Platform.OS === 'ios' ? 90 : 60,
        background: COLORS.white,
    },
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                               <Image
                                 source={focused ? icons.home : icons.homeOutline}
                                 resizeMode='contain'
                                 style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                 }}
                               />
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: "regular",
                                    color: focused ? COLORS.primary : COLORS.black,
                                    marginTop: 4
                                }}>Home</Text>
                            </View>
                        )
                    }
                }}
            />
             <Tab.Screen
                name="Trainings"
                component={TrainingsV2}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                               <Image
                                 source={focused ? icons.gym : icons.gymOutline}
                                 resizeMode='contain'
                                 style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                 }}
                               />
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: "regular",
                                    color: focused ? COLORS.primary : COLORS.black,
                                    marginTop: 4
                                }}>Trainings</Text>
                            </View>
                        )
                    }
                }}
            />
             <Tab.Screen
                name="Activity"
                component={Activity}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                               <Image
                                 source={focused ? icons.darts : icons.dartsOutline}
                                 resizeMode='contain'
                                 style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                 }}
                               />
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: "regular",
                                    color: focused ? COLORS.primary : COLORS.black,
                                    marginTop: 4
                                }}>Activity</Text>
                            </View>
                        )
                    }
                }}
            />
             <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                               <Image
                                 source={focused ? icons.user : icons.userOutline}
                                 resizeMode='contain'
                                 style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                 }}
                               />
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: "regular",
                                    color: focused ? COLORS.primary : COLORS.black,
                                    marginTop: 4
                                }}>Profile</Text>
                            </View>
                        )
                    }
                }}
            />
      
        </Tab.Navigator>
    )
}

export default BottomTabNavigation