import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import {
  Container,
} from 'reactstrap'


let name = 'Танго'
let name2= 'Салон Красоты'
export const siteTitle = 'Маникюр_Рязань62'

export default function Layout({ children, home }) {
  return (
    
    <div className={styles.container}>
      <div className={styles.fron}>
        <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></meta>
        <meta name="yandex-verification" content="22a2e1fc1a79acef" />
        <meta name="keywords" content="маникюр Рязань, классический маникюр Рязань,
        аппаратный маникюр Рязань , ногти, ногточки, сделать ногти недорого" />
        <meta name="description" content="Классический и аппаратный маникюр в городе Рязань недорого." />
        <meta charset="utf-8"/>
      </Head>
      </Container>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/nail_ava.png"
              className={utilStyles.borderCircle}
              height={180}
              width={160}
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
                  src="/public/nail.svg"
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
      
      
      <footer >
        
    
        <a
      href="https://www.instagram.com/nasti_stroilova/?r=nametag"
      target="_blank"
      rel="noopener noreferrer"
    >
      {' '}
      <img src="/icon.svg" alt="logoInsta" className="sml-logo" />
    </a>
   
 
  
     <a
      href="https://api.whatsapp.com/message/D6RISHEFURACG1"
      target="_blank"
      rel="noopener noreferrer"
    >
      {' '}
      <img src="/whatsapp.svg" alt="logoWhats" className="sml-logo" />
    </a>
    
  </footer>
      </div>
    </div>
 
  </div>
  

  )
}