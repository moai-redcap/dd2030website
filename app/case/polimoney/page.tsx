import { CoCreation } from '@/components/CoCreation'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { buttonVariants } from '@/components/ui/button'
export default async function Page() {
  return (
    <div>
      <section className="mx-auto max-w-xl mt-10">
        <h2 className="text-3xl">Polimoneyの活用事例</h2>
        <h3 className="text-2xl mt-8">2024年：安野貴博さん（AIエンジニア）の活動</h3>
        <p className="mt-4">
          AIエンジニアの安野貴博さんがPolimoneyを活用し、「2024年
          デジタル民主主義を考える会」での資金の収支を公開しました。
        </p>
        <div className="mt-4">
          <a
            href="https://polimoney.dd2030.org/demo-takahiro-anno-2024"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({
              variant: 'outline',
            })} h-9 border-black inline-flex items-center gap-2`}
          >
            事例を見る
            <NavigateNextIcon />
          </a>
        </div>
      </section>
      <CoCreation />
    </div>
  )
}
