import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        This is Landing Page
        <Link href="/dashboard">
          <a>click here dummy</a>
        </Link>
        {/* Navbar - About Us, Mission, Team, Portal */}
        {/* Search Component */}
      </div>
    </div>
  )
}

// Home.getInitialProps = async () => {
//   const res = await fetch('/api/doctors/internal-medicine')
//   const json = await res.json()
//   return json;
// }

// index.js = /
// dashboard/index.js = /dashboard/