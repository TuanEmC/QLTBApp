// styles.js

import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  inputLabel: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#f0f0f0',
    marginBottom: 20,  // Tăng khoảng cách dưới picker
    borderRadius: 5,  // Thêm border-radius để giống như các input khác
  },
  userContainer: {
    marginBottom: 20,
  },
});
