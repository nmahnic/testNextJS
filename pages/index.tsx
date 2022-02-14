import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AppLayout from '../components/AppLayout'

const Home: NextPage = () => {
  const router = useRouter()
  console.log(router)
  return (
    <AppLayout>
      <h1 className={styles.title}>devter</h1>
      <nav>
        <Link href='/timeline'>timeline</Link>
      </nav>
    </AppLayout>
  )
}

export default Home
