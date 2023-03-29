import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />;
      </ChakraProvider>
    </>
  );
}
