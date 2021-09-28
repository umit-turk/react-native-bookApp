import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import ProfilButton from '../../components/ProfilButton/ProfilButton'
import { userLogout } from '../../redux/auth/actions'
export default function ProfileScreen() {
    const user = useSelector(state => state.userAuth.user)

    const  dispatch = useDispatch()
    
    const cikis = () => {
        dispatch(userLogout());
      };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.name}>Ümit Yaşar Türk</Text>
        <View style={styles.profilarea}>
            <ProfilButton />
            <ProfilButton />
            <ProfilButton />
            <ProfilButton exitBtn>
                Çıkış
            </ProfilButton>
        </View>
        <Text style={styles.boxShadow}>Merhaba ben box</Text>
        </SafeAreaView>
    )
}
