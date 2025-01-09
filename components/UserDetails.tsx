// src/components/UserDetail.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

interface UserDetailParams {
    userId?: string;
    showDetails?: string; 
}

const UserDetail: React.FC = () => {
    const { userId, showDetails } = useLocalSearchParams<UserDetailParams>();
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/user');
    };

    return (
        <View>
            <Text accessibilityLabel='userId'>{userId ? `User  ID: ${userId}` : 'No User ID provided'}</Text>
            {showDetails === 'true' && <Text accessibilityRole='header'>Showing detailed information...</Text>}
            <Button accessibilityLabel='edit-user' title="Edit User" onPress={handleNavigate} />
        </View>
    );
};

export default UserDetail;