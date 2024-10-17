import { getServerSession as getServerSessionNextAuth } from "next-auth";
import { authConfig } from "./auth-config";

export async function getServerSession() {
  const session = await getServerSessionNextAuth(authConfig);

  return session;
}
