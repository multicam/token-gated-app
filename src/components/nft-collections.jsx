import {useEvmWalletNFTCollections} from "@moralisweb3/next";
const {log} = console, {keys} = Object, {stringify, parse} = JSON

export function NFTCollections({address}) {
    const {data: walletNFTCollections} = useEvmWalletNFTCollections({address});
    return <table>
        <thead>
        <tr>
            <td>address</td>
            <td>chain</td>
            <td>type</td>
            <td>name</td>
            <td>verified</td>
            <td>spam</td>
        </tr>
        </thead>
        <tbody>
        {walletNFTCollections?.map((collection, n) => {
            const i = parse(stringify(collection))
            return <tr key={n} className='leading-5'>
                <td>{i.tokenAddress}</td>
                <td>{i.chain}</td>
                <td>{i.contractType}</td>
                <td>{i.name}</td>
                <td>{i.verifiedCollection ? 'V' : ''}</td>
                <td>{i.possibleSpam ? 's' : ''}</td>
                {/*<td>{stringify(i)}</td>*/}
            </tr>
        })}
        </tbody>
    </table>
}