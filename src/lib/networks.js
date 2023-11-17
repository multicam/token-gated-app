export const networks = [

    {slug: "ethereum", name: "Ethereum Mainnet", chainId: 1, title: "The main network of Ethereum."},
    {slug: "ropstem-test", name: "Ropsten Testnet", chainId: 3, title: "Ethereum test network (proof-of-work)."},
    {slug: "rinkeby-test", name: "Rinkeby Testnet", chainId: 4, title: "Ethereum test network (proof-of-authority)."},
    {slug: "goerli-test", name: "Goerli Testnet", chainId: 5, title: "Ethereum test network (proof-of-authority)."},
    {slug: "kovan-test", name: "Kovan Testnet", chainId: 42, title: "Ethereum test network (proof-of-authority)."},
    {slug: "binance", name: "Binance Smart Chain Mainnet", chainId: 56, title: "Binance's main smart contract network."},
    {slug: "binance-test", name: "Binance Smart Chain Testnet", chainId: 97, title: "Testnet for Binance Smart Chain."},
    {slug: "polygon", name: "Polygon Mainnet", chainId: 137, title: "Polygon's main network (previously Matic Network)."},
    {slug: "polygon-test", name: "Polygon Testnet (Mumbai)", chainId: 80001, title: "Polygon's test network."},
    {slug: "avalanche-test", name: "Avalanche Fuji Testnet", chainId: 43113, title: "Testnet for Avalanche C-Chain."},
    {slug: "fantom", name: "Fantom Opera", chainId: 250, title: "Fantom's main network."},
    {slug: "fantom-test", name: "Fantom Testnet", chainId: 4002, title: "Testnet for Fantom Opera network."},
]

export const networkByChainId = (chainId) => networks.find((i) => i.chainId === chainId)