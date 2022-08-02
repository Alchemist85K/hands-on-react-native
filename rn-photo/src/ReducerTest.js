import { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CountTypes = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

const reducer = (state, action) => {
  switch (action.type) {
    case CountTypes.INCREMENT:
      return { count: state.count + action.value };
    case CountTypes.DECREMENT:
      return { count: state.count - action.value };
    default:
      return state;
  }
};

const initState = { count: 0 };

const ReducerTest = () => {
  const [result, dispatch] = useReducer(reducer, initState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{result.count}</Text>

      <Button
        title="+"
        onPress={() => dispatch({ type: CountTypes.INCREMENT, value: 2 })}
      />
      <Button
        title="-"
        onPress={() => dispatch({ type: CountTypes.DECREMENT, value: 3 })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 30,
  },
});

export default ReducerTest;
