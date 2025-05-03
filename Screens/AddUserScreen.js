import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ref, set } from 'firebase/database';
import { database } from '../firebase';  // Import database configuration
import { globalStyles } from '../styles/AddUserStyles';  // Import styles
import { Picker } from '@react-native-picker/picker';  // Import Picker component

export default function AddUserScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [hoTen, setHoTen] = useState('');
  const [tenTaiKhoan, setTenTaiKhoan] = useState('');
  const [soDienThoai, setSoDienThoai] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [trangThai, setTrangThai] = useState('Chờ xác thực');  // Default state value
  const [vaiTroId, setVaiTroId] = useState('');

  // Function to handle adding a user
  const handleAddUser = async () => {
    if (!email || !hoTen || !tenTaiKhoan || !soDienThoai || !matKhau || !trangThai || !vaiTroId) {
      // Kiểm tra nếu có trường thông tin thiếu
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin.');
      return;
    }

    const userId = new Date().getTime().toString();  // Tạo ID người dùng từ thời gian hiện tại (hoặc có thể tạo ID từ Firebase)
    
    try {
      // Lưu thông tin người dùng lên Firebase
      await set(ref(database, 'tai_khoan/' + userId), {
        email,
        hoTen,
        tenTaiKhoan,
        soDienThoai,
        matKhau,
        trangThai,
        vaiTroId,
      });

      // Hiển thị thông báo thành công
      Alert.alert('Thành công', 'Đã thêm người dùng thành công!', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),  // Quay lại màn hình trước đó
        },
      ]);
    } catch (error) {
      console.error('Lỗi khi thêm người dùng:', error);
      Alert.alert('Lỗi', 'Có lỗi xảy ra khi thêm người dùng. Vui lòng thử lại.');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Thêm Người Dùng</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Họ Tên"
        value={hoTen}
        onChangeText={setHoTen}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Tên Tài Khoản"
        value={tenTaiKhoan}
        onChangeText={setTenTaiKhoan}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Số Điện Thoại"
        value={soDienThoai}
        onChangeText={setSoDienThoai}
        keyboardType="phone-pad"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Mật Khẩu"
        value={matKhau}
        onChangeText={setMatKhau}
        secureTextEntry
      />
      
      {/* Picker for Trạng Thái */}
      <Text style={globalStyles.inputLabel}>Trạng Thái</Text>
      <Picker
        selectedValue={trangThai}
        style={globalStyles.picker}  // Style cho Picker
        onValueChange={(itemValue) => setTrangThai(itemValue)}  // Cập nhật trạng thái khi chọn
      >
        <Picker.Item label="Chờ xác thực" value="Chờ xác thực" />
        <Picker.Item label="Ngoại tuyến" value="Ngoại tuyến" />
      </Picker>

      <TextInput
        style={globalStyles.input}
        placeholder="Vai trò"
        value={vaiTroId}
        onChangeText={setVaiTroId}
        keyboardType="numeric"
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleAddUser}>
        <Text style={globalStyles.buttonText}>Thêm Người Dùng</Text>
      </TouchableOpacity>
    </View>
  );
}
