import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import { TestScreen } from '@/components/Test';

jest.useFakeTimers();

test('Test setup testing',() =>{
    render(<TestScreen />);
    expect(screen.getByTestId('test-view')).toBeOnTheScreen();
});