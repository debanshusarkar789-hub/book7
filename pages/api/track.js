import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const ip =
    req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress

  const { page, accessKey } = req.body

  await supabase.from('analytics').insert({
    page,
    ip,
    access_key: accessKey || null
  })

  res.json({ success: true })
}
