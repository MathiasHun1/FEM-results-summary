import axios from 'axios';
const basrUrl = './data.json';

const getData = async () => {
  try {
    const response = await axios.get(basrUrl);
    return response.data;
  } catch (error) {
    throw new Error(`failed to fetch data: ${error.message}`);
  }
};

export default {
  getData,
};
