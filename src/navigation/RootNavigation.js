import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import {userScreens, mainScreens} from './router';
import DashBoard from '../screens/DashBoard/DashBoard';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import FavoritiesScreen from '../screens/FavoritiesScreen/FavoritiesScreen';
import {useSelector} from 'react-redux';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const userStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={userScreens.LoginScreen} component={LoginScreen} />
      <Stack.Screen
        name={userScreens.RegisterScreen}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

const HomePage = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={mainScreens.DashBoardScreen} component={DashBoard} />
      <Drawer.Screen
        name={mainScreens.FavoritiesScreen}
        component={FavoritiesScreen}
      />
      <Drawer.Screen name={mainScreens.Settings} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const mainPage = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={mainScreens.HomeScreen} component={HomePage} />
      <Stack.Screen name={mainScreens.DetailScreen} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default function RootNavigation() {
  const isLogin = useSelector(state => state.system.isLogin);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLogin ? (
        <Stack.Screen name={'mainpage'} component={mainPage} />
      ) : (
        <Stack.Screen name={userScreens.UserAuth} component={userStack} />
      )}
    </Stack.Navigator>
  );
}
