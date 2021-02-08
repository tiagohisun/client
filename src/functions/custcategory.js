import axios from "axios";

export const getCustomerCategories = async () =>
  await axios.get(`${process.env.REACT_APP_API}/custcategories`);

export const getCustomerCategory = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/custcategory/${slug}`);

export const removeCustomerCategory = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/custcategory/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateCustomerCategory = async (slug, custcategory, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/custcategory/${slug}`, custcategory, {
    headers: {
      authtoken,
    },
  });

export const createCustomerCategory = async (custcategory, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/custcategory`, custcategory, {
    headers: {
      authtoken,
    },
  });

export const getCustomerCategorySubs = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/custcategory/subs/${_id}`);
