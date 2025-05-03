import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View } from 'react-native';

import HomeScreen from '../Screens/HomeScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import HoSoScreen from '../Screens/HoSoScreen';
import UserManagementScreen from '../Screens/UserManagementScreen'; // Màn hình quản lý người dùng
import AddUserScreen from '../Screens/AddUserScreen'; // Màn hình thêm người dùng
import EditUserScreen from '../Screens/EditUserScreen'; // Màn hình chỉnh sửa người dùng
import tabStyles from '../styles/tabStyles';
import iconStyles from '../styles/iconStyles';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab component, định nghĩa các tab
function Tabs({ route }) {
  const { user, setUser } = route.params || {}; // Lấy user từ params

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === 'Home') {
            return (
              <View
                style={[
                  iconStyles.floatingIconWrapper,
                  { backgroundColor: focused ? '#2196F3' : '#ddd' },
                ]}
              >
                <Image
                  source={require('../assets/icons/home.png')}
                  style={iconStyles.floatingIcon}
                />
              </View>
            );
          } else if (route.name === 'Dashboard') {
            iconSource = require('../assets/icons/Dashboard.png');
          } else if (route.name === 'HoSo') {
            iconSource = require('../assets/icons/HoSo.png');
          }

          return (
            <Image
              source={iconSource}
              style={[
                iconStyles.defaultIcon,
                { tintColor: focused ? '#2196F3' : 'gray' },
              ]}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: tabStyles.tabBar,
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerTitle: 'Bảng điều khiển', headerTitleAlign: 'center' }}
        initialParams={{ user }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: 'Trang chủ', headerTitleAlign: 'center' }}
        initialParams={{ user }}
      />
      <Tab.Screen
        name="HoSo"
        children={() => <HoSoScreen user={user} setUser={setUser} />}
        options={{ headerTitle: 'Hồ sơ cá nhân', headerTitleAlign: 'center' }}
      />
    </Tab.Navigator>
  );
}

// TabNavigator bao gồm các màn hình trong Stack
export default function TabNavigator({ route }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={Tabs} initialParams={route.params} />

      {/* Các màn hình quản lý người dùng trong stack */}
      <Stack.Screen
        name="UserManagement"
        component={UserManagementScreen}
        options={{ headerShown: true, title: 'Quản lý người dùng' }}
      />
      <Stack.Screen
        name="AddUser"
        component={AddUserScreen}
        options={{ headerTitle: 'Thêm người dùng', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUserScreen}
        options={{ headerTitle: 'Chỉnh sửa người dùng', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
}
