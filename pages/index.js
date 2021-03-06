import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Videos from '../components/videos'
import videos from '../videos/videos'
import Footer from '../components/footer'

export default function Home({videosLists}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fake Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={styles.masthead}>
          <div className={styles.headerLinks}>
            <Link href='/' className='white'><Image src={'/assets/logo.png'} width={40} height={40} /></Link>
            <div>
              <Link href='/account'>Account</Link>
              <Link href='/help'>Help</Link>
            </div>
            
          </div>
          <div className={styles.headerContent}>
              <h3>The world's greatest fake site</h3>
              <p>Create world's greatest fake site and enjoy</p>
              <p>the breeeze of fresh air when you complete it</p>
              <button id={styles.headerButton}>Do something awesome</button>
            </div>
        </div>

      </header>

      <main className={styles.main}>
  
        <Videos videosLists = {videosLists} />
      </main>

      <Footer />
    </div>
  )
}



export function getStaticProps(){
  return {
      props: {
          videosLists: videos
      }
  }
}


