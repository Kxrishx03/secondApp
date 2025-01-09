import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import useCounter from '@/hooks/useCounter';

export function Counter(){
  const {count, increment, decrement} = useCounter();

  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text accessibilityRole='header' style={styles.sectionTitle}>Current count: {count}</Text>
        <Pressable accessibilityRole='button' style={styles.button} onPress={decrement}>
          <Text testID='decrement'>Decrement</Text>
        </Pressable>
        <Pressable accessibilityRole='button' style={styles.button} onPress={increment}>
          <Text testID='increment'>Increment</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    padding: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  button: {
    borderRadius: 12,
    padding: 6,
    margin: 6,
    backgroundColor: '#9e9ef8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});