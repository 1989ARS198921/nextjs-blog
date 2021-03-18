import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'





export default function Home( ) {
  return (
    <Layout home>



      <Head>
        <title>{siteTitle}</title>

        <meta name="keywords" content="маникюр Рязань, классический маникюр Рязань,
        аппаратный маникюр Рязань , ногти, ногточки, сделать ногти недорого" />
        <meta name="description" content="Классический и аппаратный маникюр в городе Рязань недорого." />
        <meta charset="utf-8"/>
      </Head>



      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">

          <div className={utilStyles.headingMYR}><Link href={"/fotos"}>Посмотреть примеры моих работ</Link></div>
       </main>

      

      <section className={utilStyles.headingMd}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

      <div>
         <p className={utilStyles.headingMYR}>
            Привет я мастер аппаратного и классического маникюра , добро пожаловать в мир красоты и стиля .
            <p>тел.8(980)5646431</p>
           
        </p>
            
        </div>
        
        </section>
      </section>
    </Layout>
  )





}