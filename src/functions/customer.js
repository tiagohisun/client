import axios from "axios";

export const createCustomer = async (customer, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/customer`, customer, {
    headers: {
      authtoken,
    },
  });

  export const getCustomersByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/customers/${count}`);

  export const getCustomersCount = async () =>
  await axios.get(`${process.env.REACT_APP_API}/customers/total`);

  export const getCustomer = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/customer/${slug}`);

export const updateCustomer = async (slug, post, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/customer/${slug}`, post, {
    headers: {
      authtoken,
    },
  });

export const getCustomers = async (sort, order, page) =>
  await axios.post(`${process.env.REACT_APP_API}/customers`, {
    sort,
    order,
    page,
  });

  export const removeCustomer = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/customers/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const fetchCustomersByFilter = async (arg) =>
  await axios.post(`${process.env.REACT_APP_API}/search/filters`, arg);
