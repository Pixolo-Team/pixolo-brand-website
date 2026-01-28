// MODULES //
import axios, { type AxiosRequestConfig } from "axios";
// CONSTANTS //
import { API_URL } from "@/infrastructure/constants/urls.ts";
// TYPES //
import type { FaqApiResponse } from "@/types/faq";
/**
 * Fetches FAQ data from the API.
 * @param category - Optional category filter (e.g., "approach", "founders", "build")
 * @returns A promise that resolves to the API response data containing FAQs, or an object with status false and error message if the request fails.
 */
export const getFaqsRequest = async (category?: string) => {
  try {
    // Build URL with optional category parameter
    let url = `${API_URL}/section-content.php?key=faq`;
    if (category) {
      url += `&category=${encodeURIComponent(category)}`;
    }
    // Configure the GET request with headers
    const config: AxiosRequestConfig = {
      method: "get",
      url,
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Make the API request
    const response = await axios.request<FaqApiResponse>(config);
    // Return the response data
    return response.data;
  } catch (error) {
    // Log and return error details
    console.error("FAQ API error:", error);
    return { status: false, message: error };
  }
};
