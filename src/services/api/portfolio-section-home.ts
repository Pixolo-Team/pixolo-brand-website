// MODULES //
import axios, { type AxiosRequestConfig } from "axios";

// CONSTANTS //
import { API_URL } from "@/infrastructure/constants/urls.ts";

/** API Call to get all case studies request. */
export const getPortfolioContent = async () => {
  try {
    // Configure the GET request with headers
    const config: AxiosRequestConfig = {
      method: "get",
      url: `${API_URL}portfolio`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Make the API request
    const response = await axios.request(config);
    console.log(response.data);
    
    // Return the response data  
    return response.data;

  } catch (error) {
    // Log and return error details
    console.error("API error:", error);
    return { status: false, message: error };
  }
};