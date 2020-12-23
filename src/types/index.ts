export interface IComment {
  user: string;
  comment: string;
}

export interface IPost {
  title: string;
  place: string;
  description: string;
  owner: string;
  comments: IComment[];
}

export type PostType = {
  posts: IPost[];
};

export interface IUser {
  username: string | null;
}
