import {networkByChainId} from "@/lib/networks";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/registry/new-york/ui/dropdown-menu";
import {useRouter} from "next/router";

const {log} = console, {keys} = Object, {stringify, parse} = JSON

const ThinWalletMenu = () => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className="m-2 mt-3 h-3 w-3 rounded-full bg-green-500">
                <div class="" />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-slate-800 text-white border-0 m-2" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                    <p className="text-sm font-bold leading-none">LTV</p>
                    <a className="text-xs leading-none text-muted-foreground text-slate-300 hover:text-slate-500" href="mailto:info@lifetechverse.com">
                        info@lifetechverse.com
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
                onClick={() => router.push('/connect')}>
                Disconnect
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
)
const ThinWalletConnect = ({user}) => {
    const router = useRouter()
    return (
        <div className=''>
            <div className='flex justify-between gap-2'>
                {!!user ? <>
                    <div>
                        <a className='p-2 underline font-bold text-sm' href='/protected'>Protected Page</a>
                    </div>
                    <div class="flex items-center p-2">
                        <div className='text-xs text-slate-400 leading-5'>connected to {networkByChainId(user.chainId)?.name}</div>
                        <ThinWalletMenu />
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