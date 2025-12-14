import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: router.pathname })
    })
  }, [router.pathname])

  return <Component {...pageProps} />
}
