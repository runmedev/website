"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
  );
};
