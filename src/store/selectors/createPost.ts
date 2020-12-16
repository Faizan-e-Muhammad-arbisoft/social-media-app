import { RootStore } from 'store';


export const getPosts = (state: RootStore) => state.createPost.posts;
