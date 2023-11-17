import {useEvmWalletNFTCollections, useEvmWalletTokenBalances} from "@moralisweb3/next";

const {log} = console, {keys} = Object, {stringify, parse} = JSON

export function NFTCollection({address}) {
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

export function TokenBalances({address}) {
    const {data} = useEvmWalletTokenBalances({address});
    const res = data && parse(stringify(data))
    return <table className='font-mono'>
        <thead>
        <tr>
            <td>value</td>
            <td>token</td>
            <td>logo</td>
            <td>spam</td>
        </tr>
        </thead>
        <tbody>
        {res?.map((i, n) => {
            const {tokenAddress, chain, name, symbol, decimals, balance} = i
            return <tr key={n} className='leading-5'>
                <td className='text-right pr-2 font-bold'>{parseFloat(i.value).toFixed(2)}</td>
                <td>{i.token.symbol}|{i.token.name}</td>
                <td>
                    <div className='w-8 h-8'><img className='cover' src={i.token.logo}/></div>
                </td>
                {/*<td>{stringify(i)}</td>*/}
                <td>{i.token.possibleSpam ? 's' : ''}</td>
            </tr>
        })}
        </tbody>
    </table>
}
