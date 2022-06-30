import React from 'react'
import styles from '../../../styles/Home.module.css';
const index = ({user}) => {

  return (
    <div>
    <main className={styles.main}>
        <div>
            
             <div key={user.id} className={styles.card}>
             <p >Name:{user.name}</p>
             <p >User Name:{user.username}</p>
             <p >Email:{user.email}</p>
             <a href={`/user/${user.id}`}>know more</a>
            </div>
            
        </div>
    </main>
</div>
  )
}
export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
  const user = await res.json()

  return {
    props: {
      user,
    },
  }
}
export default index