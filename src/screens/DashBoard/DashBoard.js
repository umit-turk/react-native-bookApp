import React from 'react'
import {  SafeAreaView } from 'react-native'
import Books from '../../components/Books/Books';
import { styles } from './styles';

export default function DashBoard() {
   
    return (
        <SafeAreaView style={styles.container} > 
            <Books />
        </SafeAreaView>
    )
}

