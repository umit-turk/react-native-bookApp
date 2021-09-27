import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
export default function Button({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
