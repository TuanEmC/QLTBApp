import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import LoginScreen from '../Screens/LoginScreen';
import LogoutScreen from '../Screens/LogoutScreen'; // Thêm màn hình Logout
import { AuthContext } from '../context/AuthContext';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Drawer.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Drawer.Screen name="Trang chủ" component={TabNavigator} />
          <Drawer.Screen name="Đăng xuất" component={LogoutScreen} />
        </>
      )}
    </Drawer.Navigator>
  );
}
