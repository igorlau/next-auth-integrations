'use client';

import { clsx } from "clsx";
import Image, { type ImageProps } from "next/image";
import type { MouseEvent } from "react";

type AuthProviderLoginButtonProps = Readonly<{
  alt: string;
  className?: string;
  iconSrc: ImageProps["src"];
  idp: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}>;

export function AuthProviderLoginButton({
  alt,
  className,
  iconSrc,
  idp,
  onClick,
}: AuthProviderLoginButtonProps) {
  const rootClasses = clsx(
    "flex flex-row gap-2 items-center justify-center transition-colors text-base",
    "rounded-md px-4 py-2",
    "bg-white hover:bg-opacity-30",
    "border-2 border-solid border-cyan-500 hover:border-cyan-600",
    "outline outline-2 outline-offset-2 outline-transparent focus:outline-cyan-800 active:outline-1",
    className
  );

  return (
    <button className={rootClasses} onClick={onClick} type="button">
      <Image alt={alt} height={20} src={iconSrc} width={20} />
      <span>{`Continue with ${idp}`}</span>
    </button>
  );
}
