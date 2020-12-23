export const initialState = {
  loading: false,
  posts: [
    {
      title: 'First Post',
      place: 'Rawalpindi',
      description: 'This is my first post.',
      owner: 'user1',
      comments: [
        {
          user: 'user1',
          comment: 'This is first comment.',
        },
        { user: 'user2', comment: 'This is second comment.' },
      ],
    },
  ],
};
