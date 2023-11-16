import {useRouter} from "next/router";
import {getSession} from "next-auth/react";
import {NFTCollection, TokenBalances} from "@/components";

const {log} = console, {keys} = Object

const ProtectedPage = ({user}) => {
    const {push} = useRouter();
    const address = user?.address
    return (
        <div>
            <button onClick={() => push('/user')}>Profile</button>
            <h3>Protected Content</h3>
            <pre>connected to wallet {address}</pre>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: "/signin",
                permanent: false,
            },
        };
    }

    return {
        props: {user: session.user},
    };
}

export default ProtectedPage