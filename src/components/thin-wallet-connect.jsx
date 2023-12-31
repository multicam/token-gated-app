import {networkByChainId} from "@/lib/networks";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/registry/new-york/ui/dropdown-menu";
import {useRouter} from "next/router";
import { signOut } from "next-auth/react";

export const ThinWalletMenu = ({user}) =>  {
    const router = useRouter()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="mt-1 ml-2 h-3 w-3 rounded-full bg-green-500">
                    <div className="" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-slate-800 text-white border-0 m-2" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-xs text-slate-400 leading-none">Address</p>
                        <a className="text-xs leading-none  text-slate-300 hover:text-slate-500 truncate max-w-full block" href="/">
                            {user.address}
                        </a>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-xs text-slate-400 leading-none">Chain</p>
                        <a className="text-xs leading-none  text-slate-300 hover:text-slate-500 truncate max-w-full block" href="/">
                            {networkByChainId(user.chainId)?.name}
                        </a>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        className='hover:bg-slate-900 cursor-pointer'
                        onClick={() => router.push('/user')}>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className='hover:bg-slate-900 cursor-pointer'
                        onClick={() => router.push('/protected')}>
                        Protected Area
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className='hover:bg-red-900 cursor-pointer'
                    onClick={() => signOut({ redirect: "/connect" })}>
                    Disconnect
                </DropdownMenuItem>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-xs text-slate-400">Contact LTV</p>
                        <a className="text-xs leading-none  text-slate-300 hover:text-slate-500" href="mailto:info@lifetechverse.com">
                            info@lifetechverse.com
                        </a>
                    </div>
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
const ThinWalletConnect = ({user}) => {
    return (
        <div className=''>
            <div className='flex justify-between items-center gap-2'>
                {!!user ? <>
                    <div>
                        <a className='p-2 font-bold text-xs' href='/protected'>Protected Site</a>
                    </div>
                    <div className="flex items-center p-2">
                        <div className='text-xs text-slate-400 leading-5'>connected to {networkByChainId(user.chainId)?.name}</div>
                        <ThinWalletMenu user={user}/>
                    </div>
                </> : <>
                    <div></div>
                    <div className='flex p-2'>
                        <a href='/connect' className='text-sm text-orange-600'>connect wallet</a>
                    </div>
                </>}
            </div>
        </div>
    )
}
export default ThinWalletConnect