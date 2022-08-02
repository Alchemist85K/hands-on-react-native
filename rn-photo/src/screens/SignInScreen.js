import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthRoutes } from '../navigations/routes';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Input
        title="EMAIL"
        iconName="email"
        placeholder="your@email.com"
        keyboardType={KeyboardTypes.EMAIL}
        returnKeyType={ReturnKeyTypes.NEXT}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
