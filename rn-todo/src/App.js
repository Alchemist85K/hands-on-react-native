import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';
import MainStack from './navigations/MainStack';
import UserContext, { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <UserContext.Consumer>
          {({ user }) => (user ? <MainStack /> : <AuthStack />)}
        </UserContext.Consumer>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
