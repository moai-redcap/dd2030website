import { CoCreation } from '@/components/CoCreation'
export default async function Page() {
  return (
    <div>
      <section className="mx-auto max-w-xl mt-10">
        <h2 className="text-3xl">いどばたの活用事例</h2>
        <h3 className="text-2xl mt-8">チームみらいによる政策提案のプラッシュアップ</h3>
        <p className="mt-4">
          政策集に対して変更提案を広く募集するためにいどばた政策立案が使われています。
          詳細は<a href="https://policy.team-mir.ai/view/">こちら</a>
        </p>
      </section>
      <CoCreation />
    </div>
  )
}
