import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

type IdpLoginButtonProps = Readonly<{
  className?: string;
  iconSrc?: string;
  idp: string;
}>;

export function IdpLoginButton({
  className,
  iconSrc,
  idp,
}: IdpLoginButtonProps) {
  const rootClasses = clsx(
    "flex flex-row gap-2 items-center justify-center transition-colors text-base",
    "rounded-md px-4 py-2",
    "bg-white hover:bg-opacity-30",
    "border-2 border-solid border-cyan-500 hover:border-cyan-600",
    "outline outline-2 outline-offset-2 outline-transparent focus:outline-cyan-800 active:outline-1",
    className
  );

  return (
    <Link className={rootClasses} href="./">
      <IdpIcon src={iconSrc} />
      <span>{`Login with ${idp}`}</span>
    </Link>
  );
}

type IdpIconProps = {
  src?: string;
};

function IdpIcon({ src }: IdpIconProps) {
  if (!src) return null;

  return <Image alt="IDP Icon" src={src} width={20} height={20} />;
}
