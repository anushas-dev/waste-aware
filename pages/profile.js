import Image from "next/image";

export default function Profile() {
    return (
        <div>
            <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <Image class="w-24 h-24 rounded-full mx-auto" src="/images/user1.png" alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p class="text-lg font-medium text-white">
                            “Food Saviour is a dynamic and innovative organization dedicated to reducing food waste and addressing food insecurity. With a mission to rescue surplus food and redistribute it to those in need, Food Saviour strives to create a more sustainable and equitable food system.”
                        </p>
                    </blockquote>
                    <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                            Food Saviour
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            Reporting to Mother Earth
                        </div>
                    </figcaption>
                </div>
                <div className="flex flex-wrap" style={{
                    justifyContent: 'center'
                }}>
                    <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Food Rescue</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            <ul class="list-disc">
                                <li>Food Saviour operates a robust food recovery system, partnering with local businesses, farmers, and individuals to collect excess food that would otherwise be discarded. They aim to prevent food waste at its source and divert perfectly good food from ending up in landfills.</li>
                            </ul>
                        </p>
                    </a>
                    <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vision</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            <ul class="list-disc">
                                <li>Food Saviour envisions a world where no edible food goes to waste and everyone has access to nutritious meals. By tackling food waste and hunger simultaneously, they aim to foster stronger communities and promote environmental stewardship.</li>
                            </ul>
                        </p>
                    </a>
                    <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Collaboration</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            <ul class="list-disc">
                                <li>Food Saviour recognizes the power of partnerships and collaborates with diverse stakeholders, including food producers, retailers, NGOs, and volunteers. By fostering collaboration, they maximize their impact and build a supportive community dedicated to reducing food waste and ending hunger.</li>
                            </ul></p>
                    </a>
                </div>
            </figure>
        </div>
    )
}

