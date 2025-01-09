import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Modal() {
  const router = useRouter();

  const handleConfirm = () => {
    // Logic to handle confirmation
    console.log('Action confirmed!');
    router.back();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>This is a Modal</Text>
      <Button title="Confirm" onPress={handleConfirm} />
      <Button title="Cancel" onPress={() => router.back()} />
    </View>
  );
}