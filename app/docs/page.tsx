// ./app/docs/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Digital Democracy 2030 Documentation'
}

export default function DocsRootPage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Documentation</h1>
      <p className="mb-4">Please visit our documentation sections:</p>
      <div className="flex justify-center">
        <Link 
          href="/docs/getting-started/introduction"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Getting Started
        </Link>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [{}]
}
