"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Footer, Navigation } from "./Components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider>
          <Navigation />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
