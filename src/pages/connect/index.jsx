import {ConnectWalletForm} from "@/components/connect-wallet-form";
import Link from "next/link";
import Header from "@/components/header";

const Connect = () => {
    return (
        <div
            className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-slate-950"/>
                <Header className="relative z-20 flex items-center text-lg font-medium"/>
            </div>
            <div className="lg:p-8 h-full">
                <div className="mx-auto  h-full flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex-1"></div>
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Connect your wallet
                        </h1>
                    </div>
                    <ConnectWalletForm/>
                    <div className="flex-1"></div>
                    {false && <p className="px-4 text-center text-sm ">
                        By clicking continue, you agree to our{" "}
                        <Link
                            href="/terms"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/privacy"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>}
                    <p className="px-8 text-center text-xs ">
                        This is a gated community for members only. You must own a LifeTechVerse NFT to join.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Connect;