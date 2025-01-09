const { router } = require("expo-router");
const { navigate, push, replace } = require("expo-router/build/global-state/routing");

jest.mock('@react-native-community/async-storage', () => ({
    setItem: jest.fn(),
  }));
  jest.mock('@react-navigation/native', () => {
    return {
      createNavigatorFactory: jest.fn(),
      useNavigation: jest.fn(),
    };
  });
  jest.mock('@react-navigation/stack', () => ({
    createStackNavigator: jest.fn(),
  }));

  