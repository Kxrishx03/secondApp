//ASYCHRONOUS NAVIGATION TESTING
import * as React from 'react';
import { fireEvent, render, screen, waitFor} from '@testing-library/react-native'; 
import SomeComponent from '@/components/SomeComponent';
import { useRouter } from 'expo-router';


jest.mock('expo-router',() =>({
     useRouter:jest.fn()
}))


describe('',() =>{
  test('Testing asynchronous routing', async () =>{
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    
    //render
    render(<SomeComponent />)

    //event 
    fireEvent.press(screen.getByLabelText('Next-page-btn'));

    //asychronous thingy
    await waitFor(() => expect(mockPush).toHaveBeenCalledWith('/nextPage'),{
      timeout: 1500,
    });

})

})

