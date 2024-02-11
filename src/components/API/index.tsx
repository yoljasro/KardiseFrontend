// ApiComponent.ts
import axios from 'axios';
import { ApiResponse } from '../../types'; // Created types

const apiUrl = 'http://localhost:5000'; // BaseUrl
const endpoint = '/projects'; // Backend endPoint

const fetchData = async (): Promise<ApiResponse> => {
  try {
    const response = await axios.get(`${apiUrl}${endpoint}`);
    const data = response.data as ApiResponse;
    console.log(data); // Get Backend info
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;
