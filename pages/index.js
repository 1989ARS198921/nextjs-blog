import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'




export default function Home( ) {
  return (
    <Layout home>



      <Head>
        <title>{siteTitle}</title>
      </Head>



      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">

          <div className={utilStyles.headingMYR}><Link href={"/fotos"}>Посмотреть мои работы</Link></div>
       </main>

      

      <section className={utilStyles.headingMd}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

      <div>
         <p className={utilStyles.headingMYR}>
            Привет я мастер аппаратного и классического маникюра , добро пожаловать в мир красоты и стиля , творчество и желание стать лучше чем вчера.
        </p>
        </div>

        </section>
      </section>
    </Layout>
  )





}