export default function Options() {
    return (
        <div style={{
            backgroundImage: `url("https://images.pexels.com/photos/4997810/pexels-photo-4997810.jpeg")`,
            height: '80vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <br></br> <br></br>
            <div className="flex flex-wrap" style={{
                justifyContent: 'center'
            }}>

                <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Plan and Manage</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        <ul class="list-disc">
                            <li>Make a shopping list before going to the grocery store.</li>
                            <li>Buy only what you need and avoid impulse purchases.</li>
                            <li>Check your pantry and refrigerator before shopping to avoid buying duplicate items.</li>
                            <li>Properly store and organize food to prevent spoilage.</li>
                        </ul>
                    </p>
                </a>
                <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Understand Expiry Dates</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        <ul class="list-disc">
                            <li>Learn the difference between "best before" and "use by" dates.</li>
                            <li>Understand that "best before" dates indicate quality, while "use by" dates indicate safety.</li>
                            <li>Use your senses (smell, sight, and taste) to determine if food is still good to eat.</li>
                        </ul>
                    </p>
                </a>
                <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reduce Plate Waste</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        <ul class="list-disc">
                            <li>Serve smaller portions and let people serve themselves seconds if desired.</li>
                            <li>Encourage leftovers to be stored properly and eaten for future meals.</li>
                            <li>Use smaller plates to reduce the tendency to waste food.</li>
                        </ul></p>
                </a>
                <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Donate Surplus Food</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        <ul class="list-disc">
                            <li>Support food banks, shelters, and other organizations that accept food donations.</li>
                            <li>Donate excess food from events or parties to avoid waste.</li>
                        </ul>
                    </p>
                </a>
                <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Composting</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        <ul class="list-disc">
                            <li>Compost food scraps and vegetable peels to create nutrient-rich soil.</li>
                            <li>Start a backyard composting system or find a local composting facility.</li>
                        </ul>
                    </p>
                </a>

            </div>
        </div>

    )
}
