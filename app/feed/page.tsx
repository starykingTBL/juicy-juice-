import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function FeedPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/')
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to your feed</h1>
      <p>Logged in as: {session.user.email}</p>
      <p>Posts will appear here soon.</p>
    </div>
  )
}
