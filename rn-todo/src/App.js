import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';
import MainStack from './navigations/MainStack';
import { useState } from 'react';
import UserContext from './contexts/UserContext';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={'beomjun'}>
      <NavigationContainer>
        <StatusBar style="dark" />
        {user ? (
          <MainStack user={user} setUser={setUser} />
        ) : (
          <AuthStack user={user} setUser={setUser} />
        )}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
