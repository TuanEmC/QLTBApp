// styles/homeScreenStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  newsContainer: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  newsImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  newsContent: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  readMoreButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  readMoreText: {
    color: '#fff',
    fontSize: 16,
  },
});
