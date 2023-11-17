import {useRouter} from "next/router";
import {getSession} from "next-auth/react";

import {TokenBalances} from "@/components/token-balances";
import {NFTCollections} from "@/components/nft-collections";
import {useEvmNativeBalance} from '@moralisweb3/next';
import {LayoutProtected} from "@/components/layout";
import {Link} from "@radix-ui/themes";

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
    const address = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB';
    //const address = '0x29469395eAf6f95920E59F858042f0e28D98a20B';
    const {data: nativeBalance} = useEvmNativeBalance({address});
    return (
        <div className='border border-red-300 max-w-full'>
            <p>Sample Wallet</p>
            <h3>Address: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
            <NFTCollections address={address}/>
            <TokenBalances address={address}/>
        </div>
    );

}

const ProtectedPage = ({user}) => {
    const {push} = useRouter();
    const address = user?.address
    return (
        <LayoutProtected user={user}>
            <section class="p-8">
                <pre className='font-mono text-[12px]'>
                    <strong>!! protected only !! &nbsp;
                        <Link className='text-orange-600'
                              href='/user'>return to profile</Link>
                    </strong>
                </pre>
            </section>
            <section>
                <SampleWallet/>
            </section>
        </LayoutProtected>
    );
}

export default ProtectedPage