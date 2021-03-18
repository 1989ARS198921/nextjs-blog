import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

let name = '#Анастасия'
let name2= '#Рязань_Маникюр'
export const siteTitle = 'Маникюр_Рязань62'

export default function Layout({ children, home }) {
  return (
    
    <div className={styles.container}>
      <div className={styles.fron}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="маникюр Рязань, классический маникюр Рязань,
        аппаратный маникюр Рязань , ногти, ногточки, сделать ногти недорого" />
        <meta name="description" content="Классический и аппаратный маникюр в городе Рязань недорого." />
        <meta charset="utf-8"/>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/nas_ava.jpg"
              className={utilStyles.borderCircle}
              height={408}
              width={308}
              alt={name}
            />
            <h1 className={utilStyles.headingCol}>{name}</h1>
            <h2 className={utilStyles.headingCol}>{name2}</h2>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/nas_ava.jpg"
                  className={utilStyles.borderCircle}
                  height={408}
                  width={308}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <h3 className={utilStyles.headingCol}></h3>
      </header>
      <main>{children}</main>
      
      <div className={utilStyles.Socilalink}>
        
      <Image
        priority
        src="/images/ARH_25.png"
        alt="socila"
        width={150}
        height={150}
      />
      
      </div>
    </div>
  </div>

  )
}