export type Post = {
  id: number;
  username: string;
  title: string;
  body: string;
}

export type ApplicationError = {
  name: string;
  message: string;
};