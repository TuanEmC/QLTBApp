import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from '../styles/LoginScreenStyles';
import { database } from '../firebase';
import { ref, get } from 'firebase/database';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const { setIsLoggedIn, setUser } = useContext(AuthContext); // Lấy setUser từ context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const snapshot = await get(ref(database, '/'));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const users = Object.values(data);

        const matchedUser = users.find(
          (user) =>
            user.tenTaiKhoan &&
            user.matKhau &&
            user.tenTaiKhoan.trim().toLowerCase() === username.trim().toLowerCase() &&
            user.matKhau.trim() === password.trim()
        );

        if (matchedUser) {
          setUser(matchedUser); // Lưu thông tin người dùng vào context
          setError('');
          Alert.alert('Thành công', 'Đăng nhập thành công');
          setIsLoggedIn(true); // Đăng nhập thành công
        } else {
          setError('Tên đăng nhập hoặc mật khẩu sai');
        }
      } else {
        setError('Không tìm thấy dữ liệu người dùng');
      }
    } catch (err) {
      console.error('Lỗi khi truy cập Firebase:', err);
      setError('Đã xảy ra lỗi, vui lòng thử lại');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/icon.png')} style={styles.icon} />
      </View>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
