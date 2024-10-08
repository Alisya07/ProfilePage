import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';

export default function Settings({ isDarkMode, toggleDarkMode }) {
  return (
    <View style={styles.settings}>
      <Text style={[styles.settingsTitle, isDarkMode && styles.darkText]}>Settings</Text>

      <TouchableOpacity
        style={[styles.button, isDarkMode && styles.darkButton]}
        onPress={toggleDarkMode}
        activeOpacity={0.7} // Change opacity on press
      >
        <Icon name={isDarkMode ? "sun-o" : "moon-o"} size={20} color={isDarkMode ? "#fff" : "#333"} />
        <Text style={[styles.buttonText, isDarkMode && styles.darkButtonText]}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isDarkMode && styles.darkButton]}
        onPress={() => alert('Notifications')}
        activeOpacity={0.7}
      >
        <Icon name="bell" size={20} color={isDarkMode ? "#fff" : "#333"} />
        <Text style={[styles.buttonText, isDarkMode && styles.darkButtonText]}>Notifications</Text>
      </TouchableOpacity>
    </View>
  );
}
