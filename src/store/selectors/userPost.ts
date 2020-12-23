import { RootStore } from 'store';

export const getPosts = (state: RootStore) => state.userPost.posts;

export const getPost = (state: RootStore, index: number) => state.userPost.posts[index];
