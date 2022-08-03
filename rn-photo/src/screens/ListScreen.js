import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { getPosts } from '../api/post';

const ListScreen = () => {
  useEffect(() => {
    (async () => {
      const list = await getPosts();
      console.log(list, list.length);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>LIST</Text>
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

export default ListScreen;
