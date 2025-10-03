import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return (<p>Loading...</p>);
	}

	return (
		<>
			{!session ? (
				<div style={{ textAlign: 'center', padding: '2rem' }}>
					<h1 className="text-2xl">Welcome</h1>
					<p>Please sign in with GitHub to continue.</p>
					<button onClick={() => signIn('github')} className="bg-black text-white px-4 py-2 rounded">Sign in with GitHub</button>
				</div>
			) : (
				<div style={{ textAlign: 'center', padding: '2rem' }}>
					<h1 className="text-2xl">Hello {session.user?.name || session.user?.email}</h1>
					<p>You are signed in.</p>
					<button onClick={() => signOut()} className="bg-gray-200 px-4 py-2 rounded">Sign out</button>
				</div>
			)}
		</>
	)
}