import { Alert, Image, StyleSheet, View, Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import { signIn } from '../api/auth';
import PropTypes from 'prop-types';
import UserContext from '../contexts/UserContext';

const SignInScreen = () => {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async (setUser) => {
    if (!isLoading && !disabled) {
      try {
        setIsLoading(true);
        Keyboard.dismiss();
        const data = await signIn(email, password);
        setIsLoading(false);
        setUser(data);
      } catch (error) {
        Alert.alert('로그인 실패', error, [
          { text: '확인', onPress: () => setIsLoading(false) },
        ]);
      }
    }
  };

  return (
    <UserContext.Consumer>
      {({ setUser }) => (
        <SafeInputView>
          <View
            style={[
              styles.container,
              { paddingTop: insets.top, paddingBottom: insets.bottom },
            ]}
          >
            <Image
              source={require('../../assets/main.png')}
              style={styles.image}
            />

            <Input
              title={'이메일'}
              placeholder="your@email.com"
              keyboardType={KeyboardTypes.EMAIL}
              returnKeyType={ReturnKeyTypes.NEXT}
              value={email}
              onChangeText={(email) => setEmail(email.trim())}
              iconName={IconNames.EMAIL}
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <Input
              ref={passwordRef}
              title={'비밀번호'}
              returnKeyType={ReturnKeyTypes.DONE}
              secureTextEntry
              value={password}
              onChangeText={(password) => setPassword(password.trim())}
              iconName={IconNames.PASSWORD}
              onSubmitEditing={() => onSubmit(setUser)}
            />

            <View style={styles.buttonContainer}>
              <Button
                title="로그인"
                onPress={() => onSubmit(setUser)}
                disabled={disabled}
                isLoading={isLoading}
              />
            </View>
          </View>
        </SafeInputView>
      )}
    </UserContext.Consumer>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
});

export default SignInScreen;
