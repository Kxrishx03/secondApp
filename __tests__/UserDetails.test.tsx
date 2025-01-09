import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { useLocalSearchParams,useRouter } from 'expo-router';
import UserDetail from '@/components/UserDetails';
import renderer from 'react-test-renderer';
import { push } from 'expo-router/build/global-state/routing';

jest.mock('expo-router', () => ({
    useRouter: jest.fn(),
    useLocalSearchParams: jest.fn(),
}));

//Start with UseLoaclSearchParams Test
describe('User Details Testing',()=>{
       
    test('Test when userId is availabale & showdetails is true',()=>{
        //MOCK
        (useLocalSearchParams as jest.Mock).mockReturnValue({userId:'12345',showDetails:'true'});

        //RENDER
        render(<UserDetail />);

        //CHECKS
        expect(screen.getByLabelText('userId')).toBeOnTheScreen();
        expect(screen.getByText('User  ID: 12345')).toBeTruthy();
        expect(screen.getByRole('header',{name:'Showing detailed information...'})).toBeTruthy();
    });


    test('Test when userID is not available but show details is true',()=>{
        
         //MOCK
         (useLocalSearchParams as jest.Mock).mockReturnValue({userId:null,showDetails:'true'});

         //RENDER
         render(<UserDetail />);
 
         //CHECKS
         expect(screen.getByLabelText('userId')).toBeOnTheScreen();
         expect(screen.getByText('No User ID provided')).toBeTruthy();
         expect(screen.getByRole('header',{name:'Showing detailed information...'})).toBeTruthy();

    });

    test('Test when userID is not available & show details is false',() =>{
       
         
         //MOCK
         (useLocalSearchParams as jest.Mock).mockReturnValue({userId:null,showDetails:null});

         //RENDER
         render(<UserDetail />);
 
         //CHECKS
         expect(screen.getByLabelText('userId')).toBeOnTheScreen();
         expect(screen.getByText('No User ID provided')).toBeTruthy();
         expect(screen.queryByRole('header',{name:'Showing detailed information...'})).not.toBeTruthy();

    });


    //ROUTING TESTING 

    test('Routing test',()=>{
        //MOCK
         const mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({push:mockPush});

        //RENDER
        render(<UserDetail />);

        //EVENT
        fireEvent.press(screen.getByLabelText('edit-user'));

        //CHECKS
        expect(mockPush).toHaveBeenCalledTimes(1);
        expect(mockPush).toHaveBeenCalledWith('/user');

    })

    //SNAPSHOT TESTING

    test('Snapshot Testing',()=>{
              const tree = renderer.create(<UserDetail />).toJSON();
              expect(tree).toMatchSnapshot();
    })
})