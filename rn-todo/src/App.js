import { StatusBar } from 'expo-status-bar';
import SignInScreen from './screens/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <SignInScreen />
    </NavigationContainer>
  );
};

export default App;
