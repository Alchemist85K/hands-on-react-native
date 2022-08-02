import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import { PRIMARY, WHITE } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: {
          fontWeight: '700',
        },
        headerLeft: ({ canGoBack, tintColor }) => {
          if (!canGoBack) {
            return null;
          }

          return (
            <MaterialCommunityIcons
              name="chevron-left"
              size={30}
              color={tintColor}
            />
          );
        },
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'TODO List',
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: '로그인',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
