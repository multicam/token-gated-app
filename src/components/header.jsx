import config from "@/lib/config";
import {cn} from '@/lib/utils'
import Link from "next/link";

const Header = ({className, user, children}) => <>
    <header className={cn("p-4 bg-black", className)}>
        <Link href='/' className='flex items-center'>
            <img className='h-6' src='/logo.svg' alt={`${config.companyName} Logo`}/>
            <div className='font-bold text-slate-100 text-sm mt-1'>
                {config.companyName}
            </div>
            {children && <div>{children}</div>}
        </Link>
    </header>
</>
export default Header