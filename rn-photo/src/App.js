import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import Navigation from './navigations/Navigation';

const App = () => {
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
};

export default App;
