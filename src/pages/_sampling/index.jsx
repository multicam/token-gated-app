import Link from "next/link";

const {log} = console, {keys} = Object, {stringify, parse} = JSON



function SamplingPage() {
    return (
        <div className='p-2'>
            <Link href='/'>Home</Link>
            <h2>Samples</h2>
            <div><Link href='/_sampling/create'>Create</Link></div>
            <div><Link href='/_sampling/dashboard'>Dashboard</Link></div>
        </div>
    );
}

export default SamplingPage;