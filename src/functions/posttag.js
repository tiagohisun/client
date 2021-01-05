import axios from "axios";

export const getTags = async () =>
  await axios.get(`${process.env.REACT_APP_API}/tags`);

export const getTag = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/tag/${slug}`);

export const removeTag = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/tag/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateTag = async (slug, tag, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/tag/${slug}`, tag, {
    headers: {
      authtoken,
    },
  });

export const createTag = async (tag, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/tag`, tag, {
    headers: {
      authtoken,
    },
  });
