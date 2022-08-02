import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text
        style={{
          fontSize: 30,
          fontWeight: '700',
          color: 'green',
          backgroundColor: 'yellow',
          borderWidth: 1,
          borderColor: 'blue',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        Calc App
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
