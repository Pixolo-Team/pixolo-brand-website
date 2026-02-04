import axios from 'axios';
import { A as API_URL } from './Layout_V4-FK_Ih.mjs';

const getPortfoliosRequest = async () => {
  try {
    const config = {
      method: "get",
      url: `${API_URL}portfolio`,
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await axios.request(config);
    if (!Array.isArray(response.data)) {
      console.error("[getBlogsRequest] Unexpected response:", response.data);
      return [];
    }
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    return { status: false, message: error };
  }
};

export { getPortfoliosRequest as g };
