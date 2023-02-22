import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  // Learn how to securely store your private key below:
  // https://portal.thirdweb.com/sdk/set-up-the-sdk/securing-your-private-key
  privateKey: process.env.PRIVATE_KEY,
  // Set this to be your websites domain name
  domain: "localhost:3004",
});