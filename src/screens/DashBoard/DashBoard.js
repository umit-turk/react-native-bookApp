import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { cleanList, cleanPassword, userLogout } from '../../redux/system/actions';
import axios from 'axios';
export default function DashBoard() {

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(userLogout())
    }

    return (
        <SafeAreaView>
            <Text>Anasayfa</Text>
            <Text>Anasayfa</Text>
             <Text></Text>
            <TouchableOpacity onPress={logout}><Text>Çıkış</Text></TouchableOpacity>

        </SafeAreaView>
    )
}
