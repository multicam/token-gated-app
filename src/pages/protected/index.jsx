import {useRouter} from "next/router";
import {getSession} from "next-auth/react";

import {NFTCollection, TokenBalances} from "@/components";
import {useEvmNativeBalance} from '@moralisweb3/next';

const {log} = console, {keys} = Object

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: "/connect",
                permanent: false,
            },
        };
    }

    return {
        props: {user: session.user},
    };
}

function SampleWallet() {
    // const address = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB';
    const address = '0x29469395eAf6f95920E59F858042f0e28D98a20B';
    const {data: nativeBalance} = useEvmNativeBalance({address});
    return (
        <div className='border border-red-300 max-w-full'>
            <p>Sample Wallet</p>
            <h3>Address: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
            <NFTCollection address={address}/>
            <TokenBalances address={address}/>
        </div>
    );

}

const ProtectedPage = ({user}) => {
    const {push} = useRouter();
    const address = user?.address
    return (
        <div>
            <button onClick={() => push('/user')}>Profile</button>
            <h3>Protected Content</h3>
            <pre>connected to wallet {address}</pre>
            <hr/>
            <SampleWallet />
        </div>
    );
}

export default ProtectedPage