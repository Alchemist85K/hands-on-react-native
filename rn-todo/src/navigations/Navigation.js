import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
