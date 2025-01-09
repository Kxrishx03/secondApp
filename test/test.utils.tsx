import {useNavigation} from '@react-navigation/native';

export const useNavigationmock = useNavigation as jest.MockedFunction<typeof useNavigation>