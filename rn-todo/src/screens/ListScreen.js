import { memo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListItem = memo(({ item }) => {
  console.log(item.id);
  return (
    <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20 }}>{item.task}</Text>
    </View>
  );
});

const ListScreen = () => {
  const todos = [];
  for (let i = 1; i < 501; i++) {
    todos.push({ id: i, task: `task :: ${i}` });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item} />}
        windowSize={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListScreen;
