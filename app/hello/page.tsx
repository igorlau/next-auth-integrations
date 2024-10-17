import { getServerSession } from "@self/lib/auth/auth-callbacks.server";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    return redirect("/");
  }

  return <h3>{`Hello ${session?.user?.name}`}</h3>;
}
