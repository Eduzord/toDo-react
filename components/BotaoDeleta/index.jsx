import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function BotaoDeleta({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>❌</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});