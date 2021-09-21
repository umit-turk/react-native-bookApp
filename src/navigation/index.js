import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './RootNavigation';

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
    )
}
