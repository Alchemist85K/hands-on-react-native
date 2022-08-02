import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { AuthRoutes } from '../navigations/routes';
import Input, { ReturnKeyTypes, InputTypes } from '../components/Input';
import { useState } from 'react';
import Button from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeInputView>
      <View style={[styles.container, { paddingTop: top }]}>
        <Text>Sign In</Text>
        <Input
          styles={{
            container: { marginBottom: 20, paddingHorizontal: 20 },
            input: { borderWidth: 1 },
          }}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          inputType={InputTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
        />
        <Input
          styles={inputStyles}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          inputType={InputTypes.PASSWORD}
          returnKeyType={ReturnKeyTypes.DONE}
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
          styles={{
            container: {
              paddingHorizontal: 20,
              marginTop: 20,
            },
          }}
        />
      </View>
    </SafeInputView>
  );
};

const inputStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
