import axios from "axios";

const getAll = async () => {
  const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products')
  console.log('api response', res.data);
  return res.data
}

export default {
  getAll
}