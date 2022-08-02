import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import { PRIMARY, WHITE } from '../colors';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'TODO List',
          headerTintColor: PRIMARY.DEFAULT,
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerTitle: ({ children, tintColor }) => {
            return (
              <Pressable onPress={() => console.log('test')}>
                <Text style={{ color: tintColor }}>{children}</Text>
              </Pressable>
            );
          },
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
