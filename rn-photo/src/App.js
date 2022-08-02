import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import Navigation from './navigations/Navigation';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

  return (
    <UserProvider>
      <StatusBar style="dark" />
      <Navigation />
    </UserProvider>
  );
};

export default App;
