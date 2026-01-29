// MODULES //
import axios, { type AxiosRequestConfig } from "axios";

// CONSTANTS //
import { API_URL } from "@/infrastructure/constants/urls.ts";

/** API Call to fetch blogs and returns the response data or an object with status false and error message if the request fails. */
export const getBlogsRequest = async () => {
  try {
    // Configure the GET request with headers
    const config: AxiosRequestConfig = {
      method: "get",
      url: `${API_URL}blogs`,
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
    console.error("API error:", error);
    return { status: false, message: error };
  }
};
