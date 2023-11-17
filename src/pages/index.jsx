import {getSession} from "next-auth/react";

const {log} = console, {keys} = Object, {stringify, parse} = JSON

import {Layout} from "@/components/layout"
import config from "@/lib/config"

export async function getServerSideProps(context) {
    const session = await getSession(context);
    log('getServerSideProps', {session})
    return {
        props: {user: session?.user ?? null},
    };
}

const hasBars = false;

const BigLogo = () =>
    <div className='w-[39.6vw]'>
        <img className='h-full' src='/logo.svg' alt={`${config.companyName} Logo`}/>
    </div>

function HomePage({user}) {
    return (
        <Layout user={user}>
            <div className='flex h-full'>
                <div className='w-4/5 flex justify-center items-center h-full'>
                    <BigLogo/>
                </div>
                <div className='w-1/5 overflow-y-auto bg-slate-950'>
                    <h5 className='font-bold text-xs text-slate-300 px-2 py-1 rounded bg-slate-800 inline-block'>user</h5>
                    <pre className='p-2 whitespace-pre-wrap break-all text-xs'>{!!user ? stringify(user, null, 2) : <><span
                        className='text-orange-600 px-2'>no user</span> <a href='/connect'>connect wallet</a></>}</pre>
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;