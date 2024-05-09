import { useAuth } from "@/providers/authContext";
import { createSiweMessage, fetchNonce } from "@/utils/siwe";
import { useEffect } from "react";
import { useAccount, useChainId, useDisconnect, useSignMessage } from "wagmi";
import { LoginAuthPayload } from "./useWorkerLoginAuth";
import { useSubmit } from "@/providers/submitContext";

export const useSIWE = (postSignin: ()=>void) => {
const chainId = useChainId();
    const { address, isConnected } = useAccount();
    const { disconnect,disconnectAsync } = useDisconnect();
    const { triggerTaskPageReload,setTriggerTaskPageReload } = useSubmit();
    const {
        signMessageAsync,
        reset: resetSignMessage,
    } = useSignMessage();
    const {workerLogin: postSignInWithEthereum, isAuthenticated}= useAuth();

    const signInWithEthereum = async (address: string) => {
    try {
      const nonce = await fetchNonce(address);
      if (!nonce) throw new Error('Failed to fetch nonce');

      const message = createSiweMessage(address, nonce, 'Sign in with Ethereum to tensorplex',chainId);
      if (!message) throw new Error('Failed to create SIWE message');

      const signature = await signMessageAsync({ message });
      if (!signature) throw new Error("Failed to get signature");

      const payload: LoginAuthPayload = {
        walletAddress: address,
        chainId: chainId.toString(),
        signature,
        message,
        timestamp: Math.floor(Date.now() / 1000).toString(),
        nonce: nonce
      };
      // send payload to backend
      await postSignInWithEthereum(payload);
      setTriggerTaskPageReload(true);

      postSignin()

    } catch (error) {
      console.error('Error signing in with Ethereum:', error);
      // if something goes wrong, disconnect the wallet, reset sign message
      disconnectAsync();
      resetSignMessage();
    }
  };
    useEffect(() => {
    console.log("isConnected and isauth",isConnected,isAuthenticated)
    if( isConnected && !isAuthenticated && address){
      signInWithEthereum(address)
      //
    }
  }, [isConnected,isAuthenticated]);
}