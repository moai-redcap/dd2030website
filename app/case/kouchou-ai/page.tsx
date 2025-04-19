import { CoCreation } from '@/components/CoCreation'
export default async function Page() {
  return (
    <div>
      <section className="mx-auto max-w-xl mt-10">
        <h2 className="text-3xl">広聴AIの活用事例</h2>
        <h3 className="text-2xl mt-8">選挙報道</h3>
        <p className="mt-4">
          衆議院選挙に関するX上の意見を分析・可視化し、報道の透明性を高める試みに活用されました。
        </p>
        <h3 className="text-2xl mt-8">東京都の長期戦略「2050東京戦略（案）」の策定</h3>
        <p className="mt-4">
          東京都の長期戦略「2050東京戦略（案）」の策定において、市民の声を集める取り組みで活用されました。
        </p>
      </section>
      <CoCreation />
    </div>
  )
}
