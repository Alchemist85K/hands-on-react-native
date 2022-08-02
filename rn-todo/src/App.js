import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import TestAvoid from './screens/TestAvoid';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <TestAvoid />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
