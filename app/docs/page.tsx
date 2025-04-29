import * as React from 'react'
import Link from 'next/link'

export default function DocsPage() {
  return (
    <div className="p-8 text-center">
      <meta httpEquiv="refresh" content="0;url=/docs/getting-started/introduction/" />
      <h1 className="text-2xl font-bold mb-4">Documentation</h1>
      <p className="mb-4">Redirecting to documentation...</p>
      <p>
        <Link 
          href="/docs/getting-started/introduction/"
          className="text-blue-500 hover:underline"
        >
          Click here if you are not redirected automatically
        </Link>
      </p>
    </div>
  )
}

export function generateStaticParams() {
  return [{}]
}
