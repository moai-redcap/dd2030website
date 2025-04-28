// ./app/docs/layout.tsx
import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { DocsSidebarNav } from '@/components/docs-sidebar-nav'
import { getDocTree } from '@/lib/docs'

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const tree = await getDocTree() // ドキュメントツリーを取得

  return (
    <SidebarProvider>
      <DocsSidebarNav items={tree} />
      <main>
        {/* 右側コンテンツ */}
        {children}
      </main>
    </SidebarProvider>
  )
}
