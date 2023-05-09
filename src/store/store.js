import { atom } from 'recoil';

// 전역변수 사용

export const textState = atom({
  key: 'textState',
  default: '초기값',
});

export const textState2 = atom({
  key: 'textState2',
  default: '초기값2',
});

export const isLogin = atom({
  key: 'isLogin',
  default: 1,
});
