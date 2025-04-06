import axios from "axios";

// Function to fetch all products from the API
// It sends a GET request to the products API endpoint and returns the data
const getAll = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
  console.log('api response', res.data);
  return res.data
}

export default {
  getAll
}