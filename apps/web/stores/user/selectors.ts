import { atom } from 'jotai';
import { userAtom } from './atoms';

// 基础属性
export const userIdAtom = atom((get) => get(userAtom)?.id ?? null);
export const usernameAtom = atom(
  (get) => get(userAtom)?.username ?? null,
  (get, set, newUsername: string | null) => {
    const currentUser = get(userAtom);
    if (currentUser && newUsername !== null) {
      set(userAtom, { ...currentUser, username: newUsername });
    }
  },
);
export const userEmailAtom = atom((get) => get(userAtom)?.email ?? null);
export const userDisplayNameAtom = atom(
  (get) => get(userAtom)?.displayName ?? null,
);
export const userAvatarAtom = atom((get) => get(userAtom)?.avatar ?? null);
export const userBioAtom = atom((get) => get(userAtom)?.bio ?? null);

// 状态和权限属性
export const userRoleAtom = atom((get) => get(userAtom)?.role ?? null);
export const userStatusAtom = atom((get) => get(userAtom)?.status ?? null);
export const userEmailVerifiedAtom = atom(
  (get) => get(userAtom)?.emailVerified ?? false,
);
