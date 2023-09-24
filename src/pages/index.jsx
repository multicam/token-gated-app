import { useEvmNativeBalance, useEvmWalletNFTCollections } from '@moralisweb3/next';
import {getSession} from "next-auth/react";
const {log} = console, {keys} = Object
export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        log('no session')
    }

    return {
        props: {user: session?.user ?? null},
    };
}
function HomePage({user}) {
    const address = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB';
    const { data: nativeBalance } = useEvmNativeBalance({ address });
    const { data: walletNFTCollections } = useEvmWalletNFTCollections({ address });
    log('-- user', user)
    return (
        <div className='border border-red-300 max-w-full'>
            <p>Some random wallet stuff</p>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
            <p className='font-mono leading-3'>{JSON.stringify(walletNFTCollections)}</p>
        </div>
    );
}

export default HomePage;