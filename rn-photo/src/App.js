import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import Navigation from './navigations/Navigation';
import { UserProvider } from './contexts/UserContext';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

const App = () => {
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

  return (
    <ActionSheetProvider>
      <UserProvider>
        <StatusBar style="dark" />
        <Navigation />
      </UserProvider>
    </ActionSheetProvider>
  );
};

export default App;
