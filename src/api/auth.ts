import fs from "fs";
import path from "path";
import dotenv from "dotenv";

export function getBraintrustApiToken(): string {
  // Read the credentials file and parse it with dotenv
  const credentialsPath = path.resolve(process.cwd(), ".credentials");
  const credentials = dotenv.parse(fs.readFileSync(credentialsPath));

  // Extract and return the token
  return credentials.BRAINTRUST_API_TOKEN;
}
