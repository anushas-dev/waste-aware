
import { Appwrite } from 'appwrite'
import { initAppwrite } from '../../lib/appwrite';


export default async function handler( req , res) {

    try{
        let sdk = initAppwrite();
        let database = new Appwrite.Database(sdk)

        const limit = req.query.limit;
        const offset = req.query.offset;

        let response = await database.listDocuments(process.env.NEXT_APPWRITE_COLLECTION_ID, [],limit, offset)
        console.log(response.total)
        res.status(200).json({ data: response, count: response.total })

    }catch(e){
        res.status(500).json({data: e})
    }   


}
