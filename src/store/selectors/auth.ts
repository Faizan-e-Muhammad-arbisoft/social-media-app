import { RootStore } from 'store';

export const getAuthError = (state: RootStore) => state.auth.error;

export const getAuthLoading = (state: RootStore) => state.auth.loading;

export const getIsAuthenticated = (state: RootStore) => state.auth.isAuthenticated;
