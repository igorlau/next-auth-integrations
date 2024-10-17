import type { NextAuthOptions } from "next-auth";
import NextAuthCognitoProvider from "next-auth/providers/cognito";
import NextAuthAzureProvider from "next-auth/providers/azure-ad";
import NextAuthGithubProvider from "next-auth/providers/github";
import NextAuthGoogleProvider from "next-auth/providers/google";
import NextAuthOktaProvider from "next-auth/providers/okta";

// const AWSCognitoProvider = NextAuthCognitoProvider({});

// const AzureADProvider = NextAuthAzureProvider({});

const GithubProvider = NextAuthGithubProvider({
  clientId: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
});

const GoogleProvider = NextAuthGoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
});

// const OktaProvider = NextAuthOktaProvider({});

export const authConfig: NextAuthOptions = {
  providers: [
    // AWSCognitoProvider,
    // AzureADProvider,
    GithubProvider,
    GoogleProvider,
    // OktaProvider,
  ],
};
