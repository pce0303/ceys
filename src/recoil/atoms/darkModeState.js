import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const darkModeState = atom({
  key: 'darkModeState',
  default: false,
  effects: [persistAtom],
});

export default darkModeState;
