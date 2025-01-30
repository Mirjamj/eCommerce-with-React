import axios from "axios";

// Function to fetch all products from the API
// It sends a GET request to the products API endpoint and returns the data
const getAll = async () => {
  const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products')
  console.log('api response', res.data);
  return res.data
}

export default {
  getAll
}