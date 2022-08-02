import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import TextButton from '../components/TextButton';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextButton title={'로그인'} onPress={navigation.goBack} />
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

export default SignUpScreen;
