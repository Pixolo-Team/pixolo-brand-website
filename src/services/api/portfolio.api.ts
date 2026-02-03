// MODULES //
import axios, { type AxiosRequestConfig } from "axios";

// CONSTANTS //
import { API_URL } from "@/infrastructure/constants/urls.ts";

/** API Call to get all portfolio request. */
export const getPortfoliosRequest = async () => {
  try {
    // Configure the GET request
    const config: AxiosRequestConfig = {
      method: "get",
      url: `${API_URL}portfolio`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Make the API request
    const response = await axios.request(config);

    // Defensive check
    if (!Array.isArray(response.data)) {
      console.error("[getBlogsRequest] Unexpected response:", response.data);
      return [];
    }

    // Return the response data
    return response.data;
  } catch (error) {
    // Log and return error details
    console.error("API error:", error);
    return { status: false, message: error };
  }
};
