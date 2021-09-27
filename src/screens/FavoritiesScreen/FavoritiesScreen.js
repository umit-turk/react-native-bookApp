import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomModel from '../../components/CustomModal/CustomModal';
import useGetFavorities from '../../hooks/useGetFavorities/useGetFavorities';
import {userLogout} from '../../redux/auth/actions';

export default function FavoritiesScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {getFavorities, setGetFavorities, takeFavorities} = useGetFavorities();

  const user = useSelector(state => state.userAuth.user);
  const isLogin = useSelector(state => state.userAuth.isLogin);

  // favoriler sayfası her açıldığında rerender ediyoruz
  useEffect(
    () => navigation.addListener('focus', () => takeFavorities()),
    [user],
  );

  useEffect(() => {
    console.log('hello world');
  }, []);

  const cikis = () => {
    dispatch(userLogout());
  };

  return (
    <View>
      <Text>FavoritiesScreen</Text>
      <TouchableOpacity onPress={cikis}>
        <Text>cıkıs</Text>
      </TouchableOpacity>
      {!isLogin ? (
        <CustomModel />
      ) : (
        getFavorities.map(item => <Text>{item.id}</Text>)
      )}
    </View>
  );
}
