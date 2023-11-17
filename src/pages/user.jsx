import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import {NFTCollection, TokenBalances} from "@/components";

function User({ user }) {
    const address = user?.address;
    const { push } = useRouter();
    return (
        <div>
            <h4>User session:</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <h5>NFT Collection</h5>
            <NFTCollection address={address}/>
            <h5>Token Balances</h5>
            <TokenBalances address={address}/>
            <button onClick={() => signOut({ redirect: "/connect" })}>Sign out</button>
            <button onClick={() => push('/protected')}>Members Only</button>
        </div>
    );
}

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

export default User;