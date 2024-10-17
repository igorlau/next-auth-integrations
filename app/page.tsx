import { getServerSession } from "@self/lib/auth/auth-callbacks.server";
import { GoogleLoginButton } from "@self/lib/components/google-login-btn";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession();

  if (session) {
    return redirect("/hello");
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8">
      <main className="flex flex-col gap-8 items-stretch justify-center">
        <GoogleLoginButton />
        {/* <AuthProviderLoginButton idp="Azure" />
        <AuthProviderLoginButton idp="AWS Cognito" />
        <AuthProviderLoginButton idp="GitHub" /> */}
      </main>
    </div>
  );
}
