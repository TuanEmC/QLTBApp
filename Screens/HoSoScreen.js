import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../styles/HoSoScreenStyles';

export default function HoSoScreen() {
  const { user } = useContext(AuthContext); // Lấy thông tin người dùng từ context

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Xin chào {user?.hoTen || 'bạn'}!</Text>

      {/* Các thông tin người dùng */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoText}>{user?.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Số điện thoại:</Text>
        <Text style={styles.infoText}>{user?.soDienThoai}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Trạng thái:</Text>
        <Text style={styles.infoText}>{user?.trangThai}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Vai trò ID:</Text>
        <Text style={styles.infoText}>{user?.vaiTroId}</Text>
      </View>
    </ScrollView>
  );
}
