import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;
