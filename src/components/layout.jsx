import {ThinWalletMenu, default as ThinWalletConnect} from './thin-wallet-connect';
import Header from './header';
import {networkByChainId} from "@/lib/networks";

const hasBars = false;
export const Layout = ({user, children}) => {
    return (

        <div className="bg-black text-white min-h-screen flex flex-col font-noto">

            <Header user={user}/>

            <div className="flex-1 flex flex-col sm:flex-row">

                <main className="flex-1 p-2">
                    <div className='h-full'>
                        {children}
                    </div>
                </main>

                {hasBars && <nav className="order-first sm:w-32 p-2">left-bar</nav>}
                {hasBars && <aside className="sm:w-32 p-2">right-bar</aside>}

            </div>

            <footer>
                <ThinWalletConnect user={user} />
            </footer>
        </div>

    )
}

export const LayoutProtected = ({user, children}) => {
    return (
        <div
            className="relative h-screen flex-col items-center justify-center">
            <Header user={user} />
            <div className='flex-1'>
                {children}
            </div>
        </div>
    )
}