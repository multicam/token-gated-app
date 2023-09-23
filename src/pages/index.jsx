import { useEvmNativeBalance } from '@moralisweb3/next';

function HomePage() {
    const address = '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB';
    const { data: nativeBalance } = useEvmNativeBalance({ address });
    return (
        <div>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
        </div>
    );
}

export default HomePage;