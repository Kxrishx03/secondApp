import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import ListWithFetch from '@/components/ListWithFetch';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('UsersComponent', () => {
  afterEach(() => {
    mock.reset(); 
  });
  
  //ERROR CASE
  it('shows loader while fetching data', async () => {
    mock.onGet('https://dummyjson.com/users').reply(200, { users: [] });

    render(<ListWithFetch />);

    expect(screen.getByLabelText('loader')).toBeTruthy();
    await waitFor(() => expect(() => screen.getByLabelText('loader')).toThrow(),{
      timeout:1500
    });

  });

  it('shows error message when API call fails', async () => {
   mock.onGet('https://dummyjson.com/users').networkError();

   render(<ListWithFetch />);

    await waitFor(() =>  expect(screen.getByLabelText('alert')).toBeTruthy(), {
        timeout:1500
    });
  });

  it('renders users list when data is fetched successfully', async () => {
    //MOCK
    const mockUsers = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        image: 'https://via.placeholder.com/150',
        birthDate: '1990-01-01',
      },
    ];
    mock.onGet('https://dummyjson.com/users').reply(200, { users: mockUsers });
    
    //render
    render(<ListWithFetch />);

    await waitFor(() => {
      expect(screen.getByLabelText('1-user-container')).toBeTruthy();
      expect(screen.getByText('John Doe')).toBeTruthy();
      expect(screen.getByText('john.doe@example.com')).toBeTruthy();
      expect(screen.getByText('1990-01-01')).toBeTruthy();
    });
  });
});
