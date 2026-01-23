// MODULES //
import axios, { type AxiosRequestConfig } from "axios";

const API_URL = import.meta.env.PUBLIC_API_URL;

export type ClientNumber = {
  title: string;
};

export type CaseStudyData = {
  showInHome: string;
  badgeIcon: string;
  badgeTitle: string;
  title: string;
  description: string;
  logo: string;
  name: string;
  thumbnail: string;
  clientNumbers: ClientNumber[];
};

export const getCaseStudiesRequest = async () => {
  console.log(" called the getCaseStudiesREQUEST");
  try {
    const config: AxiosRequestConfig = {
      method: "get",
      url: `${API_URL}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    return { status: false, message: error };
  }
};
