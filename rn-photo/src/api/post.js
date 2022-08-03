import {
  collection,
  getFirestore,
  doc,
  setDoc,
  query,
  getDocs,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';

export const createPost = async ({ photos, location, text, user }) => {
  const { uid, displayName, photoURL } = user;
  const collectionRef = collection(getFirestore(), 'posts');
  const documentRef = doc(collectionRef);
  const id = documentRef.id;
  await setDoc(documentRef, {
    id,
    photos,
    location,
    text,
    user: { uid, displayName, photoURL },
    createdTs: Date.now(),
  });
};

export const getPosts = async ({ after }) => {
  const collectionRef = collection(getFirestore(), 'posts');

  const option = after
    ? query(
        collectionRef,
        orderBy('createdTs', 'desc'),
        startAfter(after),
        limit(10)
      )
    : query(collectionRef, orderBy('createdTs', 'desc'), limit(10));

  const documentSnapshot = await getDocs(option);
  const list = documentSnapshot.docs.map((doc) => doc.data());
  const last = documentSnapshot.docs[documentSnapshot.docs.length - 1];

  return { list, last };
};
