import { MoralisNextApi } from "@moralisweb3/next";
export default MoralisNextApi({
    apiKey: process.env.MORALIS_API_KEY,
    authentication: {
        domain: "token-gated-app.vercel.app",
        uri: process.env.NODE_ENV === 'production' ?
            'https://token-gated-app.vercel.app' :
            'http://localhost:3000',
        timeout: 120,
    },
});
