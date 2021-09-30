import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import ProfilButton from '../../components/ProfilButton/ProfilButton'
import { userLogout } from '../../redux/auth/actions'

export default function ProfileScreen() {
    const {username} = useSelector(state => state.userAuth.user)

    const  dispatch = useDispatch()
    
    const cikis = () => {
        dispatch(userLogout());
      };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.name}>{username}</Text>
        <View style={styles.profilarea}>
            <ProfilButton />
            <ProfilButton />
            <ProfilButton />
            <ProfilButton onPress={cikis} exitBtn>
                Çıkış
            </ProfilButton>
        </View>
        </SafeAreaView>
    )
}
