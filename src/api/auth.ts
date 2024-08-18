import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const PATH_TO_CREDENTIALS = path.resolve(process.cwd(), ".credentials");

export function getBraintrustApiToken(): string {
  if (!fs.existsSync(PATH_TO_CREDENTIALS)) {
    throw new Error(
      "Please obtain an API key from Braintrust, and place the token in `.credentials` at the root of the project as `BRAINTRUST_API_TOKEN=<token>`",
    );
  }

  // Read the credentials file and parse it with dotenv
  const credentials = dotenv.parse(fs.readFileSync(PATH_TO_CREDENTIALS));

  // Extract and return the token
  return credentials.BRAINTRUST_API_TOKEN;
}
