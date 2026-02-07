import type { APIRoute } from "astro";
import axios from "axios";

export const POST: APIRoute = async () => {
  try {
    const response = await axios.post(
      "https://api.vercel.com/v13/deployments",
      {
        name: import.meta.env.VERCEL_PROJECT_NAME,
        project: import.meta.env.VERCEL_PROJECT_ID,

        gitSource: {
          type: "github",
          repo: "Pixolo-Team/pixolo-brand-website",
          ref: "master",
          repoId: Number(import.meta.env.GITHUB_REPO_ID),
        },
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VERCEL_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    return new Response(
      JSON.stringify({
        status: true,
        message: "Deployment triggered successfully",
        data: response.data,
      }),
      { status: 200 },
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        status: false,
        message: "Failed to trigger deployment",
        error: error?.response?.data || error.message,
      }),
      { status: 500 },
    );
  }
};
