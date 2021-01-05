import axios from "axios";

export const getPostCategories = async () =>
  await axios.get(`${process.env.REACT_APP_API}/postcategories`);

export const getPostCategory = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/postcategory/${slug}`);

export const removePostCategory = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/postcategory/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updatePostCategory = async (slug, postcategory, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/postcategory/${slug}`, postcategory, {
    headers: {
      authtoken,
    },
  });

export const createPostCategory = async (postcategory, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/postcategory`, postcategory, {
    headers: {
      authtoken,
    },
  });

export const getPostCategoryTags = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/postcategory/tags/${_id}`);
