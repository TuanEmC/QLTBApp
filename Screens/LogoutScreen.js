import React, { useContext, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LogoutScreen() {
  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    // Xử lý đăng xuất
    setTimeout(() => {
      setIsLoggedIn(false); // Đăng xuất → trở về màn hình login
    }, 1000); // Cho hiệu ứng loading nhẹ
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#2196F3" />
      <Text>Đang đăng xuất...</Text>
    </View>
  );
}
