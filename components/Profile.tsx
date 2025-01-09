import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function () {
    const { id } = useLocalSearchParams<{ id?: string }>()
    return (
        <View>
            <Text testID='profile-id'>{id ? `Profile ID: ${id}` : 'No Profile ID provided'}</Text>
        </View>

    );
  
}