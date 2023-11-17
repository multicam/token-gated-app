"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"

import {useAccount, useConnect, useDisconnect, useSignMessage} from "wagmi";
import {useAuthRequestChallengeEvm} from "@moralisweb3/next";
import {useRouter} from "next/router";
import {MetaMaskConnector} from "wagmi/connectors/metaMask";
import {signIn} from "next-auth/react";

const {log} = console

export function ConnectWalletForm({ className, ...props }) {
    const [isLoading, setIsLoading] = React.useState(false)
    const {connectAsync} = useConnect();
    const {disconnectAsync} = useDisconnect();
    const {isConnected} = useAccount();
    const {signMessageAsync} = useSignMessage();
    const {requestChallengeAsync} = useAuthRequestChallengeEvm();
    const {push} = useRouter();

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
        return push(url??'');
    };

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Button variant="outline" type="button" disabled={isLoading} size='lg' onClick={handleAuth}>
                {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <span className='mr-2 h-6 w-6'><Icons.metamask className="" /></span>
                )}{" "}
                <span className="font-bold">Metamask</span>
            </Button>
        </div>
    )
}