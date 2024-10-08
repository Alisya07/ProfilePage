import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/styles';

export default function Profile({ isDarkMode }) {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileImageContainer}>
        <Image source={require('../assets/pfp.jpg')} style={styles.profileImage} />
      </View>
      <Text style={[styles.name, isDarkMode && styles.darkText]}>Alice Tecson</Text>
      <Text style={[styles.joined, isDarkMode && styles.darkText]}>Joined 1 year ago</Text>
    </View>
  );
}
