import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { getPosts } from '../api/post';
import PostItem from '../components/PostItem';

const post = {
  createdTs: 1657514141308,
  id: 'zdF7XMDzdYCxpgZLFS6j',
  location: '프랑스 파리',
  photos: [
    'https://firebasestorage.googleapis.com/v0/b/rn-photo.appspot.com/o/5DO5NiING2b3zfPU4WnTw1T5Pmu2%2FIMG_0032.JPEG?alt=media&token=c617cc77-d78b-4d57-80af-97498bc878eb',
    'https://firebasestorage.googleapis.com/v0/b/rn-photo.appspot.com/o/5DO5NiING2b3zfPU4WnTw1T5Pmu2%2FIMG_0022.JPEG?alt=media&token=b0c1f939-570e-47fd-b79d-ac1e1b012690',
  ],
  text: '프랑스 파리',
  user: {
    displayName: 'beomjun',
    photoURL:
      'https://firebasestorage.googleapis.com/v0/b/rn-photo.appspot.com/o/5DO5NiING2b3zfPU4WnTw1T5Pmu2%2FIMG_0022.JPEG?alt=media&token=a4fe4dac-e86b-4142-aba3-da5c31c10864',
    uid: '5DO5NiING2b3zfPU4WnTw1T5Pmu2',
  },
};

const ListScreen = () => {
  useEffect(() => {
    (async () => {
      const list = await getPosts();
      console.log(list, list.length);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <PostItem post={post} />
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
