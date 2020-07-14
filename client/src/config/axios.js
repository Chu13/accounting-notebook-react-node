import axios from "axios";

const { REACT_APP_ENV } = process.env;


const axiosBack = axios.create({
  baseURL: 'https://accounting-notebook-react.firebaseapp.com',
  // baseURL: REACT_APP_ENV,
  timeout: 300000,
})

export const getAllTransactions = () =>  {
  const url = `/api`
  return getRequest(url)
}

export const postTransaction = (data) => {
  const url = `/api/`
  return postRequest(url, data)
}

export const getTransactionById = (id) =>  {
  const url = `/api/${id}`
  return getRequest(url)
}

export const getRequest = async (url) =>  {
  try {
    const res = await axiosBack.get(url);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}

const postRequest = async (url, body) => {
  try {
    const res = await axiosBack.post(url, body);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
