
export interface Post {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
}


export interface Comment {
  id: number;
  postId: number;
  email: string;
  body: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "The Future",
    imageUrl: "./public/images/post.png",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 2,
    title: "The Future",
    imageUrl: "./public/images/post.png",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 3,
    title: "The Future",
    imageUrl: "./public/images/post.png",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },

];

export const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    email: "user1@example.com",
    body: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  },
  {
    id: 2,
    postId: 2,
    email: "user2@example.com",
    body: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  },
  {
    id: 3,
    postId: 3,
    email: "user3@example.com",
    body: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  },

];
