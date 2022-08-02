import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import { GRAY } from '../colors';
import EmptyList from '../components/EmptyList';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const ListScreen = () => {
  const todos = [];

  return todos.length ? (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item} />}
        windowSize={5}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
      />
    </View>
  ) : (
    <EmptyList />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default ListScreen;
