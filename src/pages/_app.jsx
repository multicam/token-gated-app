import { createConfig, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { mainnet, polygon, polygonMumbai, klaytn } from "wagmi/chains";
import "@/style/global.css";
import "@/style/skin.css";
import '@/style/tables.css'

// blockchain providers
// mainnet -> eth
// polygon -> matic,
// polygonMumbai -> matic testnet
// klaytn

const { publicClient, webSocketPublicClient } = configureChains(
    [mainnet, polygon, polygonMumbai],
    [publicProvider()]
);

const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
});

function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig config={config}>
            <SessionProvider session={pageProps.session} refetchInterval={0}>
                <Component {...pageProps} />
            </SessionProvider>
        </WagmiConfig>
    );
}

export default MyApp