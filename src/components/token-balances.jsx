import {useEvmWalletTokenBalances} from "@moralisweb3/next";

const {log} = console, {keys} = Object, {stringify, parse} = JSON

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
                <td className='text-right pr-2 font-bold w-1/4'>{parseFloat(i.value).toFixed(2)}</td>
                <td>{i.token.symbol}|{i.token.name}</td>
                <td>
                    <div className='w-8 h-8'>
                        <img className='cover' src={i.token.logo}/>
                    </div>
                </td>
                <td>{i.token.possibleSpam ? '*' : ''}</td>
            </tr>
        })}
        </tbody>
    </table>
}

