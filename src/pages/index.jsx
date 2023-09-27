import {useEvmNativeBalance} from '@moralisweb3/next';
import {getSession} from "next-auth/react";
import {NFTCollection, TokenBalances} from "@/components";

const {log} = console, {keys} = Object, {stringify, parse} = JSON

export async function getServerSideProps(context) {
    const session = await getSession(context);
    log('getServerSideProps', {session})
    return {
        props: {user: session?.user ?? null},
    };
}

function SampleWallet() {
    const address = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB';
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
function HomePage({session}) {
    return (
        <div className='p-2'>
            <div className='font-mono text-sm'>
                {!!session ? stringify(session, null, 2) : <><span className='text-orange-600'>no session</span> <a href='/signin'>sign in</a></>}
            </div>
            <hr/>
            <SampleWallet />
        </div>
    );
}

export default HomePage;