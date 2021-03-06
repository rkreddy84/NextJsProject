import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/UserDetails'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import UserDetails from '../components/UserDetails'

const Home: NextPage = ({users}) => {
    return (
    <div className={styles.container}>
      <Head>
        <title>Sample Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <UserDetails users={users}/>
    
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}

export default Home
