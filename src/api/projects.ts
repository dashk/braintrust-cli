import { getBraintrustApiToken } from "./auth";
import { ObjectMetadata } from "braintrust";

async function getProjects(): Promise<ObjectMetadata[]> {
  const BRAINTRUST_API_TOKEN = getBraintrustApiToken();

  const response = await fetch("https://api.braintrust.dev/v1/project", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${BRAINTRUST_API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return (await response.json()).objects;
}

export { getProjects };
