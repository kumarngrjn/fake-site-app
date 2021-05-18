
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Headers.module.css'

export default function Header(){
  return(
    <header className={styles.header}>
      <div className={styles.headerLinks}>
        <Link href='/' className='white'><Image src={'/assets/logo.png'} width={40} height={40} /></Link>
        <div>
          <Link href='/account'>Account</Link>
          <Link href='/help'>Help</Link>
        </div>
      </div>
    </header>
  )
}