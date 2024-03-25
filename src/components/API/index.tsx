// ApiComponent.ts
import axios from 'axios';
import { ApiResponse, ClientsResponse , ProjectLogoResponse } from '../../types'; // O'zgartirish kerak

const apiUrl = 'https://api.kardise.com'; // BaseUrl
const projectsEndpoint = '/projects'; // Backend projects endPoint
const clientsEndpoint = '/clients'; // Backend clients endPoint
const mottoEndpoint = '/motto'; // Backend motto endpoint
const projectsLogo = '/projectlogos' // Backend logo endpoint

const fetchData = async (endpoint: string): Promise<ApiResponse[]> => {
  try {
    const response = await axios.get(`${apiUrl}${endpoint}`);
    const data = response.data as ApiResponse[];
    // console.log(data); // Get Backend info
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
    // console.log(data); // Get Clients info
    return data;
  } catch (error) {
    console.error(`Error fetching clients data:`, error);
    throw error;
  }
};


const projectsLogoAPI = async (): Promise<ProjectLogoResponse> => {
  try {
    const response = await axios.get(`${apiUrl}${projectsLogo}`);
    const data = response.data as ProjectLogoResponse;
    // console.log(data); // Get Clients info
    return data;
  } catch (error) {
    console.error(`Error fetching clients data:`, error);
    throw error;
  }
};


export { projectsEndpoint, clientsEndpoint, fetchData, clientsAPI  , projectsLogoAPI};
