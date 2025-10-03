import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Dashboard() {
    return (
        <div style={{
            backgroundImage: `url("https://images.pexels.com/photos/4997810/pexels-photo-4997810.jpeg")`,
            height: '80vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <br></br>
            <div class="space-x-4 flex">
                <div class="w-64">
                    <Image src="/images/dashboard-1.jpg" width={500} height={500}
                        alt="" loading="lazy" />
                </div>
                <div class="w-64">
                    <Image src="/images/dashboard-2.png" width={500} height={500} alt="" loading="lazy" />
                </div>                
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
	const session = await getServerSession(context.req, context.res, authOptions);
	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return { props: {} };
}