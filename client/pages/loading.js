import styles from '../styles/LoadingPage.module.css'
import Head from 'next/head'

// logo animation (5s) => kick to index
// router.push('/login')

export default function LoadingPage() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet"></link>
    </Head>

    <div id={styles.container}>
      <div id='u-wrapper'>
        <p id='u'>U</p>
      </div>
      <div id='w-container'>
        <p id='w'>W</p>
      </div>
    </div>
    </>
  )
}