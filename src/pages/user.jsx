import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import {NFTCollection, TokenBalances} from "@/components";
import {LayoutProtected} from "@/components/layout";

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
        props: { user: session.user },
    };
}

function UserPage({ user }) {
    const address = user?.address;
    const { push } = useRouter();
    return address ? (
        <LayoutProtected>
            <h5>NFT Collection</h5>
            <NFTCollection address={address}/>
            <h5>Token Balances</h5>
            <TokenBalances address={address}/>
            <button onClick={() => signOut({ redirect: "/connect" })}>Sign out</button>
            <button onClick={() => push('/protected')}>Members Only</button>
        </LayoutProtected>
    ) : null
}

export default UserPage;