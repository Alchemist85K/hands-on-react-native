import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const TestAvoid = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'position' })}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View style={[styles.box, { backgroundColor: '#737373' }]}>
          <Image
            source={require('../../assets/main.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View style={[styles.box, { backgroundColor: '#818cf8' }]}>
          <TextInput
            style={styles.input}
            placeholder="padding"
            placeholderTextColor={'#000000'}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    height: 40,
    width: '100%',
  },
});

export default TestAvoid;
