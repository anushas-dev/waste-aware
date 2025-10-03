 

export async function getStaticProps() {
    try {
        const projectId = process.env.NEXT_APPWRITE_PROJECT;
        const apiKey = process.env.NEXT_APPWRITE_API_KEY;
        const databaseId = process.env.NEXT_APPWRITE_DATABASE_ID;
        const collectionId = process.env.NEXT_APPWRITE_COLLECTION_ID;

        // Check if required environment variables are set
        if (!projectId || !apiKey || !databaseId || !collectionId) {
            console.warn('Missing required Appwrite environment variables');
            return { props: { food_data: [] } };
        }

        const req_headers = {
            "content-type": "application/json",
            "X-Appwrite-Project": projectId,
            "X-Appwrite-Key": apiKey
        }
        
        const res = await fetch(`https://cloud.appwrite.io/v1/databases/${databaseId}/collections/${collectionId}/documents`, {
            method: "GET",
            headers: req_headers
        });
        
        const data = await res.json();
        return { props: { food_data: data.documents || [] } };
    } catch (error) {
        console.error('Error fetching food data:', error);
        return { props: { food_data: [] } };
    }
}

export default function Stats({ food_data }) {
    return (
        <div className="flex-wrap" style={{
            justifyContent: 'center'
        }}>
            <br></br>
            <figure className="bg-slate-800 rounded-xl p-8 dark:bg-slate-800">
                <div className="d-flex justify-content-center overflow-hidden">
                    <table className="min-w-full border text-center dark:border-neutral-500">
                        <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                            <tr>
                                <th scope="col">Food Item</th>
                                <th scope="col">Wastage (g)</th>
                                <th scope="col">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {food_data.map((item, index) => (
                                <tr scope="row" key={index} className="border-b dark:border-neutral-500 text-white">
                                    <td>{item.item}</td>
                                    <td>{item.wastage}</td>
                                    <td>{item.timestamp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </figure>

        </div>
    );
}
