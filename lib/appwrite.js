import { Client, Account, ID } from 'react-native-appwrite';


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



export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });

}


