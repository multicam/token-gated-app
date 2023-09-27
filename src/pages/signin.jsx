import {MetaMaskConnector} from "wagmi/connectors/metaMask";
import {signIn} from "next-auth/react";
import {useAccount, useConnect, useSignMessage, useDisconnect} from "wagmi";
import {useRouter} from "next/router";
import {useAuthRequestChallengeEvm} from "@moralisweb3/next";

function SignIn() {
    const {connectAsync} = useConnect();
    const {disconnectAsync} = useDisconnect();
    const {isConnected} = useAccount();
    const {signMessageAsync} = useSignMessage();
    const {requestChallengeAsync} = useAuthRequestChallengeEvm();
    const {push} = useRouter();
    const {log} = console

    const handleAuth = async () => {
        if (isConnected) {
            await disconnectAsync();
        }

        const {account, chain} = await connectAsync({
            connector: new MetaMaskConnector(),
        });

        log({account, chain});

        const {message} = await requestChallengeAsync({
            address: account,
            chainId: chain.id,
        });

        log({message});

        const signature = await signMessageAsync({message});

        log({signature});

        // redirect user after success authentication to '/user' page
        const {url, error} = await signIn("moralis-auth", {
            message,
            signature,
            redirect: false,
            callbackUrl: "/user",
        });

        log({url, error});
        /**
         * instead of using signIn(..., redirect: "/user")
         * we get the url from callback and push it to the router to avoid page refreshing
         */
        push(url??'');
    };

    return (
        <div className='p-2'>
            <h3>Web3 Authentication</h3>
            <button className='bg-blue-950 hover:bg-blue-900 focus:bg-black text-white py-2 px-3 rounded font-black text-sm' onClick={handleAuth}>Authenticate via Metamask</button>
        </div>
    );
}

export default SignIn;