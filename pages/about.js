export default function About() {
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

                <a class="block max-w p-10 bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ABOUT</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        Welcome to Food Waste Awareness, your go-to resource for understanding and combating the global issue of food waste. We are dedicated to raising awareness about the staggering amount of food that goes to waste each year and empowering individuals and communities to take action.

                        At Food Waste Awareness, our mission is to educate and inform individuals, families, businesses, and communities about the social, economic, and environmental implications of food waste. Through our platform, we aim to raise awareness about the scale and impact of food waste globally. We provide practical tips and resources to minimize food waste in households, schools, restaurants, and other settings. We highlight the importance of responsible consumer behavior, proper food storage, and smart shopping habits. Moreover, we promote initiatives that rescue surplus food, support food banks, and redirect food resources to those in need. We also advocate for sustainable policies and practices throughout the food supply chain, from production to consumption.

                        We invite you to join our community and become part of the movement to fight food waste. Explore our resources, articles, and practical tips to learn how you can make a difference in your daily life. Share your own experiences, ideas, and success stories to inspire others and contribute to the collective effort of reducing food waste.

                        Together, we can create a more sustainable and equitable future by minimizing food waste, preserving precious resources, and ensuring that no one goes hungry.
                    </p>
                </a>
            </div>
        </div>
    )
}

