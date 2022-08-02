import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import { WHITE } from '../colors';

const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn">
        {(screenProps) => <SignInScreen {...screenProps} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
