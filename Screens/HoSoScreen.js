import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../styles/HoSoScreenStyles';

export default function HoSoScreen() {
  const { user, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newEmail, setNewEmail] = useState(user?.email || '');
  const [newPhone, setNewPhone] = useState(user?.soDienThoai || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveChanges = () => {
    if (!newEmail || !newPhone) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
      return;
    }

    // Cập nhật thông tin người dùng vào context
    setUser({
      ...user,
      email: newEmail,
      soDienThoai: newPhone,
    });
    setIsEditing(false);
    Alert.alert('Thành công', 'Thông tin đã được cập nhật.');
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Lỗi', 'Mật khẩu không khớp.');
      return;
    }

    // Giả sử chúng ta sẽ lưu mật khẩu mới vào firebase hoặc database
    Alert.alert('Thành công', 'Mật khẩu đã được thay đổi.');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Xin chào {user?.hoTen || 'bạn'}!</Text>

      {/* Các thông tin người dùng */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={newEmail}
            onChangeText={setNewEmail}
          />
        ) : (
          <Text style={styles.infoText}>{user?.email}</Text>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Số điện thoại:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={newPhone}
            onChangeText={setNewPhone}
          />
        ) : (
          <Text style={styles.infoText}>{user?.soDienThoai}</Text>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Trạng thái:</Text>
        <Text style={styles.infoText}>{user?.trangThai}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Vai trò ID:</Text>
        <Text style={styles.infoText}>{user?.vaiTroId}</Text>
      </View>

      {/* Thêm nút chỉnh sửa thông tin */}
      <View style={styles.buttonsContainer}>
        {isEditing ? (
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
            <Text style={styles.saveButtonText}>Lưu thay đổi</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(true)}>
            <Text style={styles.editButtonText}>Chỉnh sửa thông tin</Text>
          </TouchableOpacity>
        )}

        {/* Một nút trống */}
        <TouchableOpacity style={styles.emptyButton}>
          <Text style={styles.emptyButtonText}>Nút trống</Text>
        </TouchableOpacity>
      </View>

      {/* Nếu người dùng chọn đổi mật khẩu */}
      {newPassword && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu mới"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Xác nhận mật khẩu"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleChangePassword}>
            <Text style={styles.saveButtonText}>Lưu mật khẩu mới</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
