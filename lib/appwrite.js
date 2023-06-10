import { Account, Client, Databases, ID } from 'appwrite';

const client = new Client();
const account = new Account(client);

const database = process.env.NEXT_APPWRITE_DATABASE_ID;
const collection = process.env.NEXT_APPWRITE_COLLECTION_ID;

client.setEndpoint(process.env.NEXT_APPWRITE_URL).setProject(process.env.NEXT_APPWRITE_PROJECT);

const databases = new Databases(client);

export const addItem = async (item) => {
  await databases.createDocument(
    database,
    collection,
    ID.unique(),
    {
        item,
    }
  );
};