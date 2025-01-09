import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native'; 
import Home from '@/components/Home';
import { useRouter } from 'expo-router';

// Mock the expo-router module
jest.mock('expo-router',()=>({
    useRouter:jest.fn()
}));

describe('Mock expo-router testing', () => {
    test('navigates to Profile Screen when button is pressed', () => {
        // Create a mock function for push
        const mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
        
        // Render your component
        render(<Home />);

        // Verify that the header is rendered correctly
        expect(screen.getByRole('header', { name: 'Home Screen' })).toBeTruthy();

        // Trigger the navigation event
        fireEvent.press(screen.getByLabelText('Navigate to Profile Screen'));

        // Verify that the push function was called
        expect(mockPush).toHaveBeenCalledTimes(1);
        expect(mockPush).toHaveBeenCalledWith('/profile');
    });
});