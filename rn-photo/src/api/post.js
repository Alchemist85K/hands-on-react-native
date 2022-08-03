import {
  collection,
  getFirestore,
  doc,
  setDoc,
  query,
  getDocs,
  orderBy,
  limit,
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

export const getPosts = async () => {
  const collectionRef = collection(getFirestore(), 'posts');
  const option = query(collectionRef, orderBy('createdTs', 'desc'), limit(10));
  const documentSnapshot = await getDocs(option);
  const documents = documentSnapshot.docs.map((doc) => doc.data());
  return documents;
};
