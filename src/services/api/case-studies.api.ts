// MODULES //
import axios from "axios";

const API_URL = import.meta.env.PUBLIC_API_URL;

export const getCaseStudies = async () => {
  try {
    const response = await axios(API_URL);
    const json = response.data;

    // const studies = json?.structure?.["case-studies"];
    // console.log(json);

    return json;
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
};
