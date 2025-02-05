import axios from 'axios';
const baseUrl = '/data.json';

// const getData = async () => {
//   try {
//     const response = await axios.get(baseUrl);
//     console.log(data);
//     return response.data;
//   } catch (error) {
//     throw new Error(`failed to fetch data: ${error.message}`);
//   }
// };

const getData = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

export default {
  getData,
};
