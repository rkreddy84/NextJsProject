import React from 'react'
import styles from '../styles/Home.module.css';

const UserDetails = ({users}) => {
  return (
    <div>
        <main className={styles.main}>
            <div>
                {
                users.map(user =>
                      <div key={user.id} className={styles.card}>
                        <p >Name:{user.name}</p>
                        <p >User Name:{user.username}</p>
                        <p >Email:{user.email}</p>
                        <a href={`/user/${user.id}`}>know more</a>
                       </div>)
                   }
             </div>
        </main>
    </div>
  )
}

export default UserDetails