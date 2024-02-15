// ApiComponent.ts
import axios from 'axios';
import { ApiResponse, ClientsResponse } from '../../types'; // O'zgartirish kerak

const apiUrl = 'http://localhost:5000'; // BaseUrl
const projectsEndpoint = '/projects'; // Backend projects endPoint
const clientsEndpoint = '/clients'; // Backend clients endPoint
const mottoEndpoint = '/motto'; // Backend motto endpoint

const fetchData = async (endpoint: string): Promise<ApiResponse[]> => {
  try {
    const response = await axios.get(`${apiUrl}${endpoint}`);
    const data = response.data as ApiResponse[];
    console.log(data); // Get Backend info
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

const clientsAPI = async (): Promise<ClientsResponse> => {
  try {
    const response = await axios.get(`${apiUrl}${clientsEndpoint}`);
    const data = response.data as ClientsResponse;
    console.log(data); // Get Clients info
    return data;
  } catch (error) {
    console.error(`Error fetching clients data:`, error);
    throw error;
  }
};

export { projectsEndpoint, clientsEndpoint, fetchData, clientsAPI };
