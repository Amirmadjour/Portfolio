"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Nav from "@/components/nav/Nav";
import Curve from "@/components/page/Curve";
import "@/styles/global.css";
import { AnimatePresence } from "framer-motion";
import usePageTransition from "@/zustand/pageTransition";

const queryClient = new QueryClient();

const RootLayout = ({ children }) => {
  const { isTransitioning } = usePageTransition();
  return (
    <html lang="en">
      <head>
        <title>Madjour Amir</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="relative flex flex-col h-fit w-fit overflow-auto">
            <Nav />
            <AnimatePresence mode="wait">
              <Curve key={isTransitioning}>{children}</Curve>
            </AnimatePresence>
          </div>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
