import config from "@/lib/config";
import {cn} from '@/lib/utils'

const Header = ({className}) => <>
    <header className={cn("p-2 flex items-center", className)}>
        <img className='h-6' src='/logo.svg' alt={`${config.companyName} Logo`}/>
        <div className='font-bold text-sm mt-1'>
            {config.companyName}
        </div>
    </header>
</>
export default Header