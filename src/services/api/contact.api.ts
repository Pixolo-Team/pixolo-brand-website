// MODULES //
import axios, { type AxiosRequestConfig } from "axios";

// CONSTANTS //
import { API_URL } from "@/infrastructure/constants/urls.ts";

/** API Call for Contact Form Submission */
export const submitContactFormRequest = async (payload: any) => {
  console.log(payload);

  try {
    // Configure the GET request with headers
    const config: AxiosRequestConfig = {
      method: "post",
      url: `${API_URL}/contact-form.php`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        message: payload.message,
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
