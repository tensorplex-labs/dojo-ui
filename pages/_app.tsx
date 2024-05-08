import { config } from "@/components/Wallet/WagmiWalletConfig";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import ModalProvider from '@/providers/modals';
import { SubmitProvider } from "@/providers/submitContext";
import { AuthProvider } from "@/providers/authContext";


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

   
 return ( 
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SubmitProvider>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </SubmitProvider>
        </AuthProvider>
      </QueryClientProvider>
    </WagmiProvider>)
}
