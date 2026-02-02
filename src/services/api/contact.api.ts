// MODULES //
import axios, { type AxiosRequestConfig } from "axios";

/** API Call for Contact Form Submission */
export const submitContactFormRequest = async (payload: any) => {
  try {
    // Configure the GET request with headers
    const config: AxiosRequestConfig = {
      method: "post",
      url: `https://pixoloproductions.com/api/pixolo-website/contact-form.php`,
      headers: {
        "Content-Type": "application/json",
      },

      data: payload,
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
