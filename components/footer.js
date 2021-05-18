import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Footer.module.css'

export default function Footer(){
  return(
    <footer className={styles.footer}>
          <div className={styles.footerBreadCrumbs}>
          <ul>
            <li className={styles.footerTitle}><Link href={'#'}>FakeSite</Link></li>
            <ul>
              <li><Link href={'#'}>About Us</Link></li>
              <li><Link href={'#'}>Press</Link></li>
              <li><Link href={'#'}>Policies</Link></li>
              <li><Link href={'#'}>Help</Link></li>
            </ul>
          </ul>
          <ul>
            <li className={styles.footerTitle}><Link href={'#'}>Account</Link></li>
            <ul>
              <li><Link href={'#'}>Edit Profile</Link></li>
              <li><Link href={'#'}>Friends</Link></li>
              <li><Link href={'#'}>Social</Link></li>
              <li><Link href={'#'}>Delete Profile</Link></li>
            </ul>
          </ul>
          </div>
          <div className={styles.footerLinks}>
            <Link href='/' className='white'><Image src={'/assets/logo.png'} width={40} height={40} /></Link>
            <div className={styles.footerRight}>
              <Link href='#'>Terms</Link>
              <Link href='#'>Privacy</Link>
              <Link href='#'>Site Map</Link>
            </div>
            
          </div>
      </footer>
  )
}