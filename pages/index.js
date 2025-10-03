import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <>
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        {!session && !loading && (
          <button className="h-10 px-6 font-semibold rounded-md bg-gray-700 text-white" onClick={() => signIn('github')}>
            Sign in with GitHub
          </button>
        )}
        {session && (
          <div className="space-y-2">
            <div>Signed in as {session.user?.email || session.user?.name}</div>
            <button className="h-10 px-6 font-semibold rounded-md bg-gray-700 text-white" onClick={() => signOut()}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  )
}