import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 0,
    elevation: 10,
  },
  floatingIconWrapper: {
    top: -10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ff6347',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  floatingIcon: {
    width: 28,
    height: 28,
    tintColor: 'white',
  },
  defaultIcon: {
    width: 24,
    height: 24,
  },
});
