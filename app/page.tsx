import { IdpLoginButton } from "./ui/login-button";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8">
      <main className="grid grid-flow-row gap-8 items-stretch justify-center">
        <IdpLoginButton idp="Okta" />
        <IdpLoginButton idp="Azure" />
        <IdpLoginButton idp="AWS Cognito" />
        <IdpLoginButton idp="GitHub" />
      </main>
    </div>
  );
}
