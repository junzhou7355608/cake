import type { User } from '@repo/models';
import { cookie } from '@repo/utils';
import { atom } from 'jotai';

export const tokenAtom = atom<string | null>(cookie.token.get() || null);

export const userAtom = atom<User | null>({
  id: '1',
  username: 'test',
  email: 'test@test.com',
  role: 'user',
  status: 'active',
  emailVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  displayName: 'Test User',
  avatar: 'https://via.placeholder.com/150',
  bio: 'Test bio',
  lastLoginAt: new Date(),
});
