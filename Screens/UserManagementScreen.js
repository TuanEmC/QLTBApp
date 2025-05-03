// Screens/UserManagementScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { ref, get, remove } from 'firebase/database';
import { database } from '../firebase';
import styles from '../styles/userManagementStyles';

export default function UserManagementScreen({ navigation }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const snapshot = await get(ref(database, 'tai_khoan'));
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    // Chuyển dữ liệu từ object thành mảng và thêm ID vào mỗi người dùng
                    const userList = Object.keys(data).map((key) => ({
                        id: key,  // Firebase key là ID người dùng
                        ...data[key],
                    }));
                    setUsers(userList);
                }
            } catch (error) {
                console.error('Lỗi khi tải danh sách người dùng:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        Alert.alert('Xác nhận xóa', 'Bạn có chắc muốn xóa tài khoản này?', [
            {
                text: 'Hủy',
                style: 'cancel',
            },
            {
                text: 'Xóa',
                onPress: async () => {
                    try {
                        const userRef = ref(database, `tai_khoan/${id}`);
                        await remove(userRef);
                        setUsers(users.filter((user) => user.id !== id)); // Xóa người dùng khỏi state
                    } catch (err) {
                        console.error('Xóa thất bại:', err);
                    }
                },
            },
        ]);
    };

    const renderItem = ({ item }) => (
        <View style={styles.userCard}>
            <Text style={styles.userText}>Tên: {item.hoTen}</Text>
            <Text style={styles.userText}>Tài khoản: {item.tenTaiKhoan}</Text>
            <Text style={styles.userText}>Email: {item.email}</Text>
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => navigation.navigate('EditUser', {
                        userId: item.id, // Truyền ID của người dùng
                        email: item.email,
                        hoTen: item.hoTen,
                        tenTaiKhoan: item.tenTaiKhoan,
                        soDienThoai: item.soDienThoai,
                        matKhau: item.matKhau,
                        trangThai: item.trangThai,
                        vaiTroId: item.vaiTroId,
                    })}
                >
                    <Text style={styles.buttonText}>Sửa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDelete(item.id)} // Sử dụng ID đúng từ Firebase
                >
                    <Text style={styles.buttonText}>Xóa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quản lý người dùng</Text>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddUser')}
            >
                <Text style={styles.buttonText}>+ Thêm người dùng</Text>
            </TouchableOpacity>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id}  // Sử dụng id từ Firebase
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}
