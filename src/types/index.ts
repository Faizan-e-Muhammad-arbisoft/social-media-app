export interface IPost {
  title: string;
  place: string;
  description: string;
  owner: string;
}

export type PostType = {
  posts: IPost[];
};

export interface IUser {
  username: string | null;
}
