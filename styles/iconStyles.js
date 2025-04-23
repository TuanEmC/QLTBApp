import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  floatingIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    backgroundColor: '#004aad',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  floatingIcon: {
    width: 30,  // <-- thử tăng lên 30 hoặc 32
    height: 30,
    tintColor: '#fff',
  },
  defaultIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',

  },
});
