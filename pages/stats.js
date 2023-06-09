import { headers } from "next/dist/client/components/headers";

export async function getStaticProps() {
    const req_headers = {
        "content-type": "application/json",
        "X-Appwrite-Project": process.env.NEXT_APPWRITE_PROJECT,
        "X-Appwrite-Key": process.env.NEXT_APPWRITE_API_KEY
    }
    const databasedId = process.env.NEXT_APPWRITE_DATABASE_ID
    const collectionId = process.env.NEXT_APPWRITE_COLLECTION_ID
    const res = await fetch("https://cloud.appwrite.io/v1/databases/" + databasedId + "/collections/" + collectionId + "/documents", {
        method: "GET",
        headers: req_headers
    });
    const data = await res.json();
    const food_data = data.documents;
    return { props: { food_data } };
}

export default function Stats({ food_data }) {
    return (
        <div className="flex-wrap" style={{
            justifyContent: 'center'
        }}>
            <br></br>
            <figure class="bg-slate-800 rounded-xl p-8 dark:bg-slate-800">
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
