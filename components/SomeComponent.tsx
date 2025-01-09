import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const SomeComponent = () => {
  const router = useRouter();

  const handleNavigation = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push('/nextPage');
  };

  return (
    <View>
      <Text accessibilityRole='header'>Current Page</Text>
      <Button accessibilityLabel='Next-page-btn' title="Go to Next Page" onPress={handleNavigation} />
    </View>
  );
};

export default SomeComponent;