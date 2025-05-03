import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import LoginScreen from '../Screens/LoginScreen';
import LogoutScreen from '../Screens/LogoutScreen';
import { AuthContext } from '../context/AuthContext';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { isLoggedIn, user, setUser, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    setIsLoggedIn(false); // Đánh dấu người dùng đã đăng xuất
    setUser(null); // Xóa thông tin người dùng khỏi context
  };

  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Drawer.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Drawer.Screen
            name="Trang chủ"
            component={TabNavigator}
            initialParams={{ user, setUser }} // Truyền tham số user và setUser vào TabNavigator
          />
          <Drawer.Screen
            name="Đăng xuất"
            component={LogoutScreen}
            initialParams={{ handleLogout }} // Truyền hàm handleLogout để đăng xuất
          />
        </>
      )}
    </Drawer.Navigator>
  );
}
