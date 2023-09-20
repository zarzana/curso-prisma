import { Post } from "@prisma/client";
import prisma from "../database/database";

const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">

async function getPosts() {
  const posts = await prisma.post.findMany()
  return posts
}

async function getPost(id: number) {
  const post = await prisma.post.findUnique({
    where: { id }
  })

  return post
}

async function createPost(post: CreatePost) {
  await prisma.post.create({ data: post })
}

async function deletePost(id: number) {
  await prisma.post.delete({
    where: { id }
  })
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;