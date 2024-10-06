import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
// import NaverProvider from "next-auth/providers/naver";

export default NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
    // NaverProvider({
    //   clientId: process.env.NAVER_CLIENT_ID,
    //   clientSecret: process.env.NAVER_CLIENT_SECRET,
    // }),
  ],
  debug: true,
  callbacks: {
    async jwt(token, user, account) {
      console.log("jwt> ", token);
      console.log("jwt> ", user);
      console.log("jwt> ", account);
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session(session, token) {
      console.log("session> ", session);
      console.log("session> ", token);
      session.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
