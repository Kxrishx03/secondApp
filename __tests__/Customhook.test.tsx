import React from 'react'; 
import { Counter } from '@/components/Counter';
import { render ,screen, fireEvent, renderHook, act} from '@testing-library/react-native';
import useCounter from '@/hooks/useCounter';
import renderer from 'react-test-renderer';

describe('Custom Hook Testing',() =>{

    //Integration method
    test('Integrtion methods',()=>{
          render(<Counter />);
         const decrement = screen.getByRole('button',{name:'Decrement'});
         const increment = screen.getByRole('button',{name:'Increment'});

         //Before starting of event 
         expect(screen.getByRole('header',{name:'Current count: 0'})).toBeOnTheScreen();
         
         //After increment
         fireEvent.press(increment);
         expect(screen.getByRole('header',{name:'Current count: 1'})).toBeOnTheScreen();

         //After decremnet
         fireEvent.press(decrement);
         expect(screen.getByRole('header',{name:'Current count: 0'})).toBeOnTheScreen();

    });

    //Isolation Testing
    test('Isolation testing',()=>{
      const {result} = renderHook(useCounter);
      expect(result.current.count).toBe(0);
      //Increment
      act(()=>result.current.increment()); 
      expect(result.current.count).toBe(1);
      //Decrement
      act(()=>result.current.decrement()); 
      expect(result.current.count).toBe(0);
    });

    //Snapshot Testing
    test('Snapshot practice',()=>{
      const tree = renderer.create(<Counter />).toJSON();
      expect(tree).toMatchSnapshot();
    })
});