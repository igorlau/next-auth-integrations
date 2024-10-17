'use client';

import { AuthProviderLoginButton } from "./auth-provider-login-button";
import googleLogo from "@self/public/google.png";
import { signIn } from "next-auth/react";

export function GoogleLoginButton() {
  const handleSignInWithGoogle = () => {
    signIn("google");
  };

  return (
    <AuthProviderLoginButton
      alt="Google Logo"
      iconSrc={googleLogo}
      idp="Google"
      onClick={handleSignInWithGoogle}
    />
  );
}
