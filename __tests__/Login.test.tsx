import * as React from 'react';
import { render, screen, userEvent,cleanup} from '@testing-library/react-native'; 
import Login from '@/components/Login';

const username = 'admin';
const password ='123admin';

afterEach(cleanup);
describe('Login form filling testing',  () =>{
    test('', async ()=>{
        const mockOnSubmit = jest.fn();
        render(<Login onSubmit={mockOnSubmit} />);
        const user = userEvent.setup();
        await user.type(screen.getByPlaceholderText('Username'),'admin');
        await user.type(screen.getByPlaceholderText('Password'),'123admin');
        await user.press(screen.getByRole('button', { name: 'Submit' }));

        //Verify onSubmit was called
        expect(mockOnSubmit).toHaveBeenCalledWith({username,password});
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    })
})