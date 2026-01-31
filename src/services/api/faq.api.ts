// MODULES //
import axios, { type AxiosRequestConfig } from "axios";

// CONSTANTS //
import { API_URL } from "@/infrastructure/constants/urls.ts";

/** API Call to get the FAQ data */
export const getFaqsRequest = async () => {
  try {
    // Configure the GET request with headers
    const config: AxiosRequestConfig = {
      method: "get",
      url: `${API_URL}faq`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Make the API request
    const response = await axios.request(config);

    // Return the response data
    return response.data;
  } catch (error) {
    // Log and return error details
    console.error("FAQ API error:", error);
    return error;
  }
};
