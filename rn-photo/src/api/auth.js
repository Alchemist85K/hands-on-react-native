import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const signIn = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
  return user;
};
