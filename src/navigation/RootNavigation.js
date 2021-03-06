import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {userScreens, mainScreens} from './router';
import DashBoard from '../screens/DashBoard/DashBoard';
import FavoritiesScreen from '../screens/FavoritiesScreen/FavoritiesScreen';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CartScreen from '../screens/CartScreen/CartScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import Icon from 'react-native-vector-icons/dist/Feather';
import Person from 'react-native-vector-icons/dist/Ionicons';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();

const HomepageBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#FFC7A0'},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: 'white'},
        tabBarInactiveTintColor: '#FFC7A0',
        tabBarActiveTintColor: '#FFC7A0',
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Anasayfa',
          tabBarIcon: () => <Icon name="home" size={25} color={'#FFC7A0'} />,
        }}
        name={mainScreens.DashBoardScreen}
        component={DashBoard}
      />
      <Stack.Screen
        name="second"
        options={{
          headerShown: false,
          title: 'Favoriler',
          tabBarIcon: () => <Icon name="star" size={25} color={'#FFC7A0'} />,
        }}>
        {() => (
          <SettingsStack.Navigator>
            <Tab.Screen
              options={{
                headerStyle: {backgroundColor: '#FFC7A0'},
                headerTintColor:"white",
                title: 'Favoriler',
                tabBarIcon: () => (
                  <Icon name="star" size={25} color={'#FFC7A0'} />
                ),
              }}
              name={mainScreens.FavoritiesScreen}
              component={FavoritiesScreen}
            />
          </SettingsStack.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen
        name={'first'}
        options={{
          title: 'Sepet',
          tabBarIcon: () => (
            <Icon name="shopping-cart" size={25} color={'#FFC7A0'} />
          ),
        }}>
        {() => (
          <SettingsStack.Navigator>
            <Tab.Screen
              options={{headerShown: false}}
              name={mainScreens.CartScreen}
              component={CartScreen}
            />
          </SettingsStack.Navigator>
        )}
      </Stack.Screen>
      <Tab.Screen
        options={{
          title: 'Profil',
          tabBarIcon: () => (
            <Person name="person" size={25} color={'#FFC7A0'} />
          ),
        }}
        name={mainScreens.ProfileScreen}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const userAccount = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: '??ye Giri??i'}}
        name={userScreens.LoginScreen}
        component={LoginScreen}
      />
      <Stack.Screen
        name={userScreens.RegisterScreen}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default function RootNavigation() {
  //react navigationdan ??a????r
  const navigation = useNavigation();
  const goToDash = () => {
    navigation.goBack();
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={'homepage'}
        component={HomepageBottom}
      />
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: '#FFC7A0'},
          headerBackTitleVisible: false,
          headerTintColor:"white",
          headerLeft: () => <Button  color="white" title="geri" onPress={goToDash} />,
        }}
        name={mainScreens.DetailScreen}
        component={DetailScreen}
      />
      <Stack.Screen
        options={{
          title: '??ye Giri??i',
          headerStyle: {backgroundColor: '#FFC7A0'},
          headerBackTitleVisible: false,
          headerBackTitleStyle: {color: 'red'},
        }}
        name={userScreens.LoginScreen}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          title: 'Hesap Olu??tur',
          headerStyle: {backgroundColor: '#FFC7A0'},
        }}
        name={userScreens.RegisterScreen}
        component={RegisterScreen}
      />
      <Stack.Screen name={'account'} component={userAccount} />
    </Stack.Navigator>
  );
}
