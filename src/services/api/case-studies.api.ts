// MODULES //
import axios, { type AxiosRequestConfig } from "axios";

const API_URL = import.meta.env.PUBLIC_API_URL;

/**
 * Fetches case studies from the API.
 *
 * @returns A promise that resolves to the API response data containing case studies,
 *                         or an object with status false and error message if the request fails.
 */
export const getCaseStudiesRequest = async () => {
  try {
    // Configure the GET request with headers
    const config: AxiosRequestConfig = {
      method: "get",
      url: `${API_URL}`,
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
