import {getSession} from "next-auth/react";

const {log} = console, {keys} = Object, {stringify, parse} = JSON

export async function getServerSideProps(context) {
    const session = await getSession(context);
    log('getServerSideProps', {session})
    return {
        props: {user: session?.user ?? null},
    };
}

function Layout({session, children}) {
    return (
        <div className='p-2'>
            <div className='font-mono text-sm'>
                {!!session ? stringify(session, null, 2) : <><span className='text-orange-600'>no session</span> <a href='/connect'>connect wallet</a></>}
            </div>
            <div>{children}</div>

        </div>
    );
}

export default Layout