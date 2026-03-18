import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { useEffect } from "react";
import { trackGlobalInteractionFromTarget } from "@/lib/analytics";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      trackGlobalInteractionFromTarget(event.target);
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}