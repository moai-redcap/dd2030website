import { CoCreation } from '@/components/CoCreation'
export default async function Page() {
  return (
    <div>
      <section className="mx-auto max-w-xl mt-10">
        <h2 className="text-3xl">いどばたの活用事例</h2>
        <h3 className="text-2xl mt-8">2030年参院選×チームみらい</h3>
        <p className="mt-4">
          2030年の参議院選挙に関する政策集に対する変更提案を広く募集する試みが行われています。
          詳細は<a href="https://policy.team-mir.ai/view/">こちら</a>
        </p>
      </section>
      <CoCreation />
    </div>
  )
}
