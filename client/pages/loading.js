import styles from '../styles/LoadingPage.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router';

// logo animation (5s) => kick to index
// router.push('/login')

export default function LoadingPage() {
  const router = useRouter();
  setTimeout(() => router.push('/dashboard'), 5000)
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet"></link>
    </Head>

    <div id={styles.container}>
      <div id={styles.u_wrapper}>
        <p id={styles.u}>U</p>
      </div>
      <div id={styles.w_container}>
        <p id={styles.w}>W</p>
      </div>
    </div>
    </>
  )
}