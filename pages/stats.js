export async function getStaticProps() {
    try {
        const projectId = process.env.NEXT_APPWRITE_PROJECT;
        const apiKey = process.env.NEXT_APPWRITE_API_KEY;
        const databaseId = process.env.NEXT_APPWRITE_DATABASE_ID;
        const collectionId = process.env.NEXT_APPWRITE_COLLECTION_ID;


        if (!projectId || !apiKey || !databaseId || !collectionId) {
            console.warn('Missing required Appwrite environment variables');
            return { props: { food_data: [] } };
        }

        const req_headers = {
            "content-type": "application/json",
            "X-Appwrite-Project": projectId,
            "X-Appwrite-Key": apiKey
        };

        const res = await fetch(`https://cloud.appwrite.io/v1/databases/${databaseId}/collections/${collectionId}/documents`, {
            method: "GET",
            headers: req_headers
        });

        if (!res.ok) {
            return { props: { food_data: [] } };
        }

        const data = await res.json();
        const food_data = Array.isArray(data?.documents) ? data.documents : [];
        return { props: { food_data } };
    } catch (error) {
        console.error('Error fetching food data:', error);
        return { props: { food_data: [] } };
    }
}

export default function Stats({ food_data }) {
    return (
        <div className="flex flex-wrap justify-center p-4">
            <figure className="bg-slate-800 rounded-xl p-8 dark:bg-slate-800 w-full max-w-4xl">
                <div className="overflow-x-auto">
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
                                <tr key={index} className="border-b dark:border-neutral-500 text-white">
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
