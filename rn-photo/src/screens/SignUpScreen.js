import { StyleSheet, Text, View } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
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
