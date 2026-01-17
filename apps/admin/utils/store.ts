import { createStoreAccessor } from '@repo/utils';
import { getDefaultStore } from 'jotai';

/**
 * 全局app store
 */
export const globalStore = getDefaultStore();

export const [
  useGlobalStoreAtomValue,
  useSetGlobalStoreAtom,
  useGlobalStoreAtom,
  setGlobalStoreAtom,
] = createStoreAccessor(globalStore);
