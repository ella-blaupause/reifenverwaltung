import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../../../db/connect";
import User from "../../../../../db/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const {username, password} = credentials;

        try{
          await dbConnect();
          const user = await User.findOne({ username });

          if(!user){
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }
          return user;
        }catch(error){
          console.log("Error: ", error);
        }
      }
    }),
  ],
  callbacks: {
    // We can pass in additional information from the user document MongoDB returns
    // This could be avatars, role, display name, etc...
    async jwt({token, user}){
        if (user) {
            token.user = {
                _id: user._id,
                username: user.username,
                role: user.role,
            }
        }
        return token
    },
    // If we want to access our extra user info from sessions we have to pass it the token here to get them in sync:
    session: async({session, token}) => {
        if(token){
            session.user = token.user
        }
        return session
    }
},  
session: {
  strategy: "jwt",
},
secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
