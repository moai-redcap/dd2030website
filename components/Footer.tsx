import Link from 'next/link'
import { buttonVariants } from './ui/button'
export function Footer() {
  return (
    <footer>
      <div className="gradient h-0.5"></div>
      <div className="sm:flex justify-center pt-6">
        <div>
          <Link
            href="https://join.slack.com/t/w1740803485-clv347541/shared_invite/zt-32haul96s-Iopa_ET_YcqXWlpzpqABRA"
            className={`${buttonVariants({ variant: 'ghost' })} h-11`}
            target="_blank"
          >
            <span></span>
            Slackに参加
          </Link>
        </div>
        <div>
          <Link
            href="https://github.com/digitaldemocracy2030"
            className={`${buttonVariants({ variant: 'ghost' })} h-11`}
            target="_blank"
          >
            <span></span>
            Github
          </Link>
        </div>
        <div>
          <Link href="/policies/privacy" className={`${buttonVariants({ variant: 'ghost' })} h-11`}>
            <span></span>
            プライバシーポリシー
          </Link>
        </div>
        <div>
          <Link href="/policies/terms" className={`${buttonVariants({ variant: 'ghost' })} h-11`}>
            <span></span>
            利用規約
          </Link>
        </div>
      </div>
      <div className="flex justify-center pt-4 pb-6">
        <small>© 2025 デジタル民主主義2030</small>
      </div>
    </footer>
  )
}
