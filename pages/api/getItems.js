
import { Databases, Appwrite } from 'appwrite'
import { initAppwrite } from '../../lib/appwrite';
import { NextRequest } from 'next/server'

export default async function handler(req , res)  {

    try {
        let database = new Databases()

        const limit = req.query.limit;
        const offset = req.query.offset;
        const requestHeaders = new Headers(request.headers)
        requestHeaders.set('Content-Type', 'application/json')
        requestHeaders.set('X-Appwrite-Project', 'process.env.NEXT_APPWRITE_PROJECT')
        requestHeaders.set('X-Appwrite-Key', 'process.env.NEXT_APPWRITE_API_KEY')

        let response = await database.listDocuments(Headers=requestHeaders, process.env.NEXT_APPWRITE_DATABASE_ID, process.env.NEXT_APPWRITE_COLLECTION_ID, [], limit, offset)
        console.log(response.total)
        res.status(200).json({ data: response, count: response.total })

    } catch (e) {
        res.status(500).json({ data: e })
    }


}
