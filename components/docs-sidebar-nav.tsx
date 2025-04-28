// ./components/docs-sidebar-nav.tsx
'use client' // クライアントコンポーネントにする

import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { DocNavItem } from '@/lib/docs' // 先ほど定義した型
import { cn } from '@/lib/utils' // shadcn/ui のユーティリティ関数 (なければ作成 or 削除)

interface DocsSidebarNavProps {
  items: DocNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  if (!items?.length) {
    return null
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={index} className={cn('pb-4')}>
                  {item.items ? (
                    <div>{item.title}</div>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : ''}
                        rel={item.href.startsWith('http') ? 'noreferrer' : ''}
                      >
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                  {item.items?.length && (
                    <DocsSidebarNavItems items={item.items} pathname={pathname} />
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

interface DocsSidebarNavItemsProps {
  items: DocNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({ items, pathname }: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.items ? ( // ファイルのみ表示（ディレクトリは親でタイトル表示済みのため）
          <a
            key={index}
            href={item.href}
            className={cn(
              'flex w-full items-center rounded-md p-2 hover:underline',
              pathname === item.href ? 'font-medium text-foreground' : 'text-muted-foreground',
            )}
            target={item.href.startsWith('http') ? '_blank' : ''}
            rel={item.href.startsWith('http') ? 'noreferrer' : ''}
          >
            {item.title}
          </a>
        ) : (
          // 子ディレクトリがある場合、さらにネストして表示（必要ならスタイル調整）
          <div key={item.href} className="ml-4">
            <h5 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{item.title}</h5>
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          </div>
        ),
      )}
    </div>
  ) : null
}

// cn関数 (shadcn/uiを使わない場合は clsx や classnames を使うか、単純な文字列結合でもOK)
// lib/utils.ts などに配置
// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"
// export function cn(...inputs: ClassValue[]) {
//  return twMerge(clsx(inputs))
// }
