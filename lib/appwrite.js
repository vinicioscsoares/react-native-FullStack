import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.soares.aora',
    projectId: '66d5d3110027929e3227',
    databaseId: "66d5d58d00030aafa0c0",
    userColectionID: '66d5d5b2002de53d3098',
    videoColectionId: '66d5d5ca001727492562',
    storageId: '66d5d727000b515cf8c5',
}

// Init your React Native SDK

const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client)
const avatars = new Avatars(client)
const databases = new Databases(client)



export const createUser = async (email,password,username) => {
    // Register User
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;

    const avatarUrl= avatars.getInitials(username)

    await signIn(email,password);

    const newUser= await databases.createDocument(
        config.databaseId,
        config.userColectionID,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar:avatarUrl
        }
    )

    return newUser;

    } catch (error){
        console.log(error);
        throw new Error(error)
    }

}

export async function signIn(email,password) {
    try {
        const session= await account.createEmailPasswordSession(email,password);
    }catch(error){
        throw new Error(error)
    }
}


