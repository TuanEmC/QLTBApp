import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import HoSoScreen from '../Screens/HoSoScreen';
import tabStyles from '../styles/tabStyles';
import iconStyles from '../styles/iconStyles';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ route }) {
  const { user, setUser } = route.params || {}; // Lấy cả user và setUser từ DrawerNavigator

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
        options={{
          headerTitle: 'Thống kê',
          headerTitleAlign: 'center',
        }}
        initialParams={{ user }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Trang chủ',
          headerTitleAlign: 'center',
        }}
        initialParams={{ user }}
      />
      <Tab.Screen
        name="HoSo"
        children={() => <HoSoScreen user={user} setUser={setUser} />}
        options={{
          headerTitle: 'Hồ sơ cá nhân',
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
}
