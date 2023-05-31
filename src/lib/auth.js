import Google from 'next-auth/providers/google'


export const authOptions = {
    // adapter: MongoDBAdapter(clientPromise), 
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    database: process.env.MONGODB_URI
}