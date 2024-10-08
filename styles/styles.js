import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#2c2c2c',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImageContainer: {
    borderWidth: 4,
    borderColor: '#8DB600',
    borderRadius: 100,
    padding: 4,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  darkText: {
    color: '#ffffff',
  },
  joined: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  settings: {
    width: '100%',
    marginBottom: 20,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    padding: 15,
    borderRadius: 20, // Updated for a more modern rounded look
    marginVertical: 5,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  darkButton: {
    backgroundColor: '#555',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginLeft: 10,
  },
  darkButtonText: {
    color: '#fff',
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
  },
  darkSignOutButton: {
    backgroundColor: '#c0392b',
  },
  signOutButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default styles;
