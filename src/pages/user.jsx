import {getSession} from "next-auth/react";
import {TokenBalances} from "@/components/token-balances";
import {NFTCollections} from "@/components/nft-collections";
import {LayoutProtected} from "@/components/layout";
import Link from "next/link"

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

function UserPage({user}) {
    const address = user?.address;
    return address ? (
        <LayoutProtected user={user}>
            <div className="h-full overflow-y-auto font-noto">
                <section className='p-4'>
                    <h1 className='text-4xl font-extrabold'>Welcome To The Membership Only Pages</h1>
                </section>
                <section className='p-4'>
                    <h2 className='font-extrabold text-slate-500'>Wallet Content</h2>
                    <h5 className='font-black text-sm mt-4 text-slate-700'>NFT Collection</h5>
                    <NFTCollections address={address}/>
                    <h5 className='font-black text-sm mt-4 text-slate-700'>Token Balances</h5>
                    <TokenBalances address={address}/>
                </section>
                <section className='p-4'>
                    <pre className='font-mono text-[12px]'>
                        <strong>!! protected only !! &nbsp;
                            <Link className='text-orange-600' href='/protected'>access protected content</Link>
                        </strong>
                    </pre>
                </section>
            </div>
        </LayoutProtected>
    ) : null
}

export default UserPage;