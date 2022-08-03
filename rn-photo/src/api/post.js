import { collection, getFirestore, doc, setDoc } from 'firebase/firestore';

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
