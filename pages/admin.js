import { useEffect, useState } from 'react'

export default function Admin() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/admin-analytics')
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Analytics Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
