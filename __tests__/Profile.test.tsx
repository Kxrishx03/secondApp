import React from 'react'; 
import { render ,screen, fireEvent, renderHook, act} from '@testing-library/react-native';
import Profile from '@/components/Profile';
import { useLocalSearchParams } from 'expo-router';
import renderer from 'react-test-renderer';


jest.mock('expo-router');
describe('Testing UseLocalSearchParams',()=>{
       
    test('Test when id is provided',()=>{
          //MOCK 
          (useLocalSearchParams as jest.Mock).mockReturnValue({id:'123'});
          //RENDER
         const {getByText} = render(<Profile />);
          //CHECKS
          expect(getByText('Profile ID: 123')).toBeTruthy();
    });

    test('Test when id is not  provided',()=>{
        //MOCK 
        (useLocalSearchParams as jest.Mock).mockReturnValue({id:null});
        //RENDER
       const {getByText} = render(<Profile />);
        //CHECKS
        expect(getByText('No Profile ID provided')).toBeTruthy();
  });

   //Snapshot Testing
      test('Snapshot practice',()=>{
        const tree = renderer.create(<Profile />).toJSON();
        expect(tree).toMatchSnapshot();
      })
})