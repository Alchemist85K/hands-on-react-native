import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';
import MainStack from './navigations/MainStack';
import { useState } from 'react';
import UserContext from './contexts/UserContext';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <StatusBar style="dark" />
        {user ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
