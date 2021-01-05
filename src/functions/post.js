import axios from "axios";

export const createPost = async (post, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/post`, post, {
    headers: {
      authtoken,
    },
  });

  export const getPostsByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/posts/${count}`);

  export const getPostsCount = async () =>
  await axios.get(`${process.env.REACT_APP_API}/posts/total`);

  export const getPost = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/post/${slug}`);

export const updatePost = async (slug, post, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/post/${slug}`, post, {
    headers: {
      authtoken,
    },
  });

export const getPosts = async (sort, order, page) =>
  await axios.post(`${process.env.REACT_APP_API}/posts`, {
    sort,
    order,
    page,
  });

  export const removePost = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/post/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const fetchPostsByFilter = async (arg) =>
  await axios.post(`${process.env.REACT_APP_API}/search/filters`, arg);
