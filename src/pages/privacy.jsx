import Link from "next/link";

const {log} = console, {keys} = Object, {stringify, parse} = JSON



function PrivacyPage() {
    return (
        <div className='p-2'>
            <Link href='/'>Home</Link>
            <h2>Privacy Policy</h2>
        </div>
    );
}

export default PrivacyPage;