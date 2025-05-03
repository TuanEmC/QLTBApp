import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/dashboardStyles';

export default function DashboardScreen({ navigation }) {
  const { user } = useContext(AuthContext);

  const renderButton = (label, onPress = () => {}) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  const renderAdminFunctions = () => (
    <View style={styles.functionContainer}>
      <Text style={styles.sectionTitle}>Chức năng dành cho Admin</Text>
      {renderButton('Quản lý người dùng', () =>
        navigation.navigate('UserManagement')
      )}
      {renderButton('Quản lý hệ thống')}
      {renderButton('Quản lý trang tin')}
    </View>
  );

  const renderKtvFunctions = () => (
    <View style={styles.functionContainer}>
      <Text style={styles.sectionTitle}>Chức năng dành cho KTV</Text>
      {renderButton('Xem báo cáo')}
    </View>
  );

  const renderUserFunctions = () => (
    <View style={styles.functionContainer}>
      <Text style={styles.sectionTitle}>Chức năng dành cho Người dùng</Text>
      {renderButton('Xem lịch sử')}
    </View>
  );

  const renderFunctions = () => {
    switch (user?.vaiTroId) {
      case 1:
        return renderAdminFunctions();
      case 2:
        return renderKtvFunctions();
      default:
        return renderUserFunctions();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>Chào mừng, {user?.hoTen}</Text>
      {renderFunctions()}
    </ScrollView>
  );
}
