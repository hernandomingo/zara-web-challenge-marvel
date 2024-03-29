"use client";

import { useEffect } from "react";
import { Error } from "@/components";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <Error message={error.message} onReload={reset} />;
}
