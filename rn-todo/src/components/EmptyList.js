import { Image, StyleSheet, Text, View } from 'react-native';
import { PRIMARY } from '../colors';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/main.png')} style={styles.image} />
      <Text style={styles.text}>할 일을 추가해주세요</Text>
    </View>
  );
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
  text: {
    marginTop: 10,
    color: PRIMARY.DARK,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default EmptyList;
