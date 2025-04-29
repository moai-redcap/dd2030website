// ./app/docs/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Digital Democracy 2030 Documentation'
}

export default function DocsRootPage() {
  return (
    <div>
      <meta httpEquiv="refresh" content="0;url=/docs/getting-started/introduction" />
      <p>Redirecting to documentation...</p>
      <p><Link href="/docs/getting-started/introduction">Click here if you are not redirected automatically</Link></p>
    </div>
  )
}

export function generateStaticParams() {
  return []
}
