import NextAuthCredentialsProvider from "next-auth/providers/credentials";

const CredentialsProvider = NextAuthCredentialsProvider({
  name: "Sign in",
  credentials: {
    email: {
      label: "Email",
      type: "email",
      placeholder: "example@example.com",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) {
      return null;
    }

    // Get user in database

    // Verify password
  },
});

export { CredentialsProvider };
