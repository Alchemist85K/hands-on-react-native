import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged as onAuthStateChangedFirebase,
  signOut as signOutFirebase,
  updateProfile,
} from 'firebase/auth';

export const getAuthErrorMessages = (errorCode) => {
  switch (errorCode) {
    case AuthErrorCodes.USER_DELETED:
      return '계정을 찾을 수 없습니다.';
    case AuthErrorCodes.INVALID_EMAIL:
      return '유효하지 않은 이메일 주소입니다.';
    case AuthErrorCodes.INVALID_PASSWORD:
      return '잘못된 비밀번호입니다.';
    case AuthErrorCodes.EMAIL_EXISTS:
      return '이미 가입된 이메일입니다.';
    case AuthErrorCodes.WEAK_PASSWORD:
      return '비밀번호는 최소 6자리입니다.';
    default:
      return '로그인에 실패했습니다.';
  }
};

export const signIn = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
  return user;
};

const PHOTO_URL =
  'https://firebasestorage.googleapis.com/v0/b/rn-photo.appspot.com/o/profile.png?alt=media';

export const signUp = async ({ email, password }) => {
  const { user } = await createUserWithEmailAndPassword(
    getAuth(),
    email,
    password
  );

  await updateUserInfo({
    displayName: email.split('@')[0].slice(0, 10),
    photoURL: PHOTO_URL,
  });

  return user;
};

export const onAuthStateChanged = (callback) => {
  return onAuthStateChangedFirebase(getAuth(), callback);
};

export const signOut = async () => {
  await signOutFirebase(getAuth());
};

export const updateUserInfo = async (userInfo) => {
  try {
    await updateProfile(getAuth().currentUser, userInfo);
  } catch (e) {
    throw new Error('사용자 정보 수정에 실패했습니다.');
  }
};
