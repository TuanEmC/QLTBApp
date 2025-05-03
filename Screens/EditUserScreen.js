import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/AddUserStyles';

export default function EditUserScreen({ route, navigation }) {
  const { userId, email, hoTen, tenTaiKhoan, soDienThoai, matKhau, trangThai, vaiTroId } = route.params;

  // Sử dụng state để giữ thông tin người dùng và cập nhật chúng khi người dùng sửa
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedHoTen, setUpdatedHoTen] = useState(hoTen);
  const [updatedTenTaiKhoan, setUpdatedTenTaiKhoan] = useState(tenTaiKhoan);
  const [updatedSoDienThoai, setUpdatedSoDienThoai] = useState(soDienThoai);
  const [updatedMatKhau, setUpdatedMatKhau] = useState(matKhau);
  const [updatedTrangThai, setUpdatedTrangThai] = useState(trangThai);
  const [updatedVaiTroId, setUpdatedVaiTroId] = useState(vaiTroId);

  useEffect(() => {
    // Đây là nơi bạn có thể tải lại dữ liệu nếu cần, tuy nhiên ở đây chúng ta đã truyền trực tiếp qua route.params
  }, [route.params]);

  const handleUpdateUser = () => {
    console.log('Cập nhật người dùng:', {
      userId,
      updatedEmail,
      updatedHoTen,
      updatedTenTaiKhoan,
      updatedSoDienThoai,
      updatedMatKhau,
      updatedTrangThai,
      updatedVaiTroId,
    });

    // Xử lý cập nhật người dùng ở đây (lưu vào Firebase hoặc backend)
    navigation.goBack(); // Quay lại màn hình trước khi cập nhật
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Sửa Người Dùng</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        value={updatedEmail}
        onChangeText={setUpdatedEmail}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Họ Tên"
        value={updatedHoTen}
        onChangeText={setUpdatedHoTen}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Tên Tài Khoản"
        value={updatedTenTaiKhoan}
        onChangeText={setUpdatedTenTaiKhoan}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Số Điện Thoại"
        value={updatedSoDienThoai}
        onChangeText={setUpdatedSoDienThoai}
        keyboardType="phone-pad"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Mật Khẩu"
        value={updatedMatKhau}
        onChangeText={setUpdatedMatKhau}
        secureTextEntry
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Trạng Thái"
        value={updatedTrangThai}
        onChangeText={setUpdatedTrangThai}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Vai trò"
        value={updatedVaiTroId}
        onChangeText={setUpdatedVaiTroId}
        keyboardType="numeric"
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleUpdateUser}>
        <Text style={globalStyles.buttonText}>Cập nhật Người Dùng</Text>
      </TouchableOpacity>
    </View>
  );
}
