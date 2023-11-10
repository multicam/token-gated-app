import Link from "next/link";

const {log} = console, {keys} = Object, {stringify, parse} = JSON



function TermsPage() {
    return (
        <div className='p-2'>
            <Link href='/'>Home</Link>
            <Link href='/_sampling/'>Samples</Link>
            <h2>Terms & Conditions</h2>
        </div>
    );
}

export default TermsPage;