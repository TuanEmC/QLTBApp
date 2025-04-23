import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Thêm màu nền nhẹ
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Chỉnh màu chữ
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff', // Background trắng cho mỗi phần thông tin
    borderRadius: 8,
    shadowColor: '#000', // Thêm bóng cho đẹp
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Hiệu ứng bóng cho Android
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555', // Màu nhạt hơn cho nhãn
  },
  infoText: {
    fontSize: 16,
    color: '#333', // Màu chữ cho thông tin
    marginTop: 5,
  },
});
