import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { View, TouchableOpacity, Text } from 'react-native'; // Added Text import
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from './components/Profile';
import Settings from './components/Settings';
import styles from './styles/styles';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Profile isDarkMode={isDarkMode} />
      
      <View style={styles.section}>
        <TouchableOpacity style={[styles.button, isDarkMode && styles.darkButton]}>
          <Icon name="user" size={20} color={isDarkMode ? "#fff" : "#333"} />
          <Text style={[styles.buttonText, isDarkMode && styles.darkButtonText]}>Manage user</Text>
        </TouchableOpacity>
      </View>

      <Settings isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <TouchableOpacity style={[styles.signOutButton, isDarkMode && styles.darkSignOutButton]}>
        <Icon name="sign-out" size={20} color="#fff" />
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>

      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </View>
  );
}
