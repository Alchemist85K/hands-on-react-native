import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EmptyList from '../components/EmptyList';
import List from '../components/List';

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const todos = [];

  return (
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length ? <List data={todos} /> : <EmptyList />}
    </View>
  );
};

export default ListScreen;
