import NextAuth from "next-auth";
import { MoralisNextAuthProvider } from "@moralisweb3/next";

export default NextAuth({
    providers: [MoralisNextAuthProvider()],
    // adding user info to the user session object
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            // console.log('init',{token})
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            // console.log({token});
            // console.log({session});
            console.log('-- auth session',!!session?.user)
            return session;
        },
    },
});